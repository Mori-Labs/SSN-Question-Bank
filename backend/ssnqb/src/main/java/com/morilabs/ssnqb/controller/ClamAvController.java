package com.morilabs.ssnqb.controller;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.morilabs.ssnqb.exception.ClamAvException;
import com.morilabs.ssnqb.model.QpSubmission;
import com.morilabs.ssnqb.service.ClamAVService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

@RestController
@RequestMapping("/api")
@CrossOrigin(origins = "http://localhost:5173")
public class ClamAvController {

    @Autowired
    private ClamAVService clamAVService;

    @PostMapping("/contribute")
    public ResponseEntity<String> handleUpload(
            @RequestParam("metadata") String metadataJson,
            @RequestParam("file") MultipartFile file) {
        try {
            ObjectMapper objectMapper = new ObjectMapper();
            QpSubmission QpSubmission = objectMapper.readValue(metadataJson, QpSubmission.class);

            boolean isClean = clamAVService.scan(file.getInputStream());

            if (!isClean) {
                return ResponseEntity.badRequest().body("Virus detected in the uploaded file");
            }

            System.out.println(QpSubmission);

            return ResponseEntity.ok("File is clean and accepted.");

        } catch (ClamAvException e) {
            return ResponseEntity
                    .status(502)
                    .body("Virus scanner service unavailable: " + e.getMessage());

        } catch (Exception e) {
            e.printStackTrace();
            return ResponseEntity
                    .internalServerError()
                    .body("An error occurred on the server side");
        }
    }

}

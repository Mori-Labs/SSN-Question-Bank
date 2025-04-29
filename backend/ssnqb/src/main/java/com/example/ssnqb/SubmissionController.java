package com.example.ssnqb;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
@CrossOrigin(origins = "http://localhost:5173")
@RestController
@RequestMapping("/api")  
public class SubmissionController {

    @PostMapping("/contribute")
    public ResponseEntity<String> handleSubmission(@RequestBody QPSubmissionRequest request) {
        return ResponseEntity.ok("Submission received!");
    }
}


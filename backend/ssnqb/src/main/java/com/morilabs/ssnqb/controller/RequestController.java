package com.morilabs.ssnqb.controller;

import com.morilabs.ssnqb.dto.RequestPaperDTO;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api")
@CrossOrigin(origins = "http://localhost:3000") // Allows frontend requests from React
public class RequestController {

    @PostMapping("/request")
    public String handlePaperRequest(@RequestBody RequestPaperDTO request) {
        // Print to console
        System.out.println("===== New Paper Request Received =====");
        System.out.println("Year: " + request.year);
        System.out.println("Semester: " + request.semester);
        System.out.println("Department: " + request.department);
        System.out.println("Subject: " + request.subject);
        System.out.println("Exam: " + request.exam);
        System.out.println("Regulation: " + request.regulation);
        System.out.println("Is New Paper: " + request.newPaper);
        System.out.println("======================================");

        return "Paper request received successfully";
    }
}

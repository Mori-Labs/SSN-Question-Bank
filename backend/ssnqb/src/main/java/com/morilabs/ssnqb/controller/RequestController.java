package com.morilabs.ssnqb.controller;

import com.morilabs.ssnqb.dto.RequestPaperDTO;
import org.springframework.web.bind.annotation.*;
import com.morilabs.ssnqb.service.Jsonhelper;

@RestController
@RequestMapping("/api")
@CrossOrigin(origins = "http://localhost:3000") 
public class RequestController {

    @PostMapping("/request")
    public String handlePaperRequest(@RequestBody RequestPaperDTO request) {

        System.out.println("===== New Paper Request Received =====");
        System.out.println("Year: " + request.getYear());
        System.out.println("Semester: " + request.getSemester());
        System.out.println("Department: " + request.getDepartment());
        System.out.println("Subject: " + request.getSubject());
        System.out.println("Exam: " + request.getExam());
        System.out.println("Regulation: " + request.getRegulation());
        System.out.println("Is New Paper: " + request.isNewPaper());
        System.out.println("======================================");

        Jsonhelper jhelp = new Jsonhelper();
        String response = jhelp.JSONhelper(request);

        return "Paper request received successfully";
    }

}

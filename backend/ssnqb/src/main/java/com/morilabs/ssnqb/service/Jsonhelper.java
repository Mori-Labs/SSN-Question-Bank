package com.morilabs.ssnqb.service;

import org.json.JSONObject;
import org.json.JSONException;

import com.morilabs.ssnqb.dto.RequestPaperDTO;

public class Jsonhelper {

    public String JSONhelper(RequestPaperDTO questionPaperRequest) {
        try {
            JSONObject reqJSON = new JSONObject();

            reqJSON.put("Year", questionPaperRequest.getYear());
            reqJSON.put("Semester", questionPaperRequest.getSemester());
            reqJSON.put("Department", questionPaperRequest.getDepartment());
            reqJSON.put("Subject", questionPaperRequest.getSubject());
            reqJSON.put("Exam", questionPaperRequest.getExam());
            reqJSON.put("NewPaper", questionPaperRequest.isNewPaper());
            reqJSON.put("Regulation", questionPaperRequest.getRegulation());

            String questionPaperRequestString = reqJSON.toString(2);

            System.out.println(questionPaperRequestString);

            return questionPaperRequestString;

        } catch (JSONException e) {
            System.err.println("Error while creating JSON: " + e.getMessage());
            e.printStackTrace();
            return "{}"; 
        } catch (Exception e) {
            System.err.println("Unexpected error: " + e.getMessage());
            e.printStackTrace();
            return "{}";

            
        }
    }
}

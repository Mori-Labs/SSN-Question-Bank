package com.morilabs.ssnqb.util;

import com.morilabs.ssnqb.model.QpSubmission;

public class GenerateFileName {

    public static String filename_generator(QpSubmission qpdetails) {
        return new StringBuilder()
            .append(qpdetails.getYear()).append("_")
            .append(Getacronyms.getAcronym(qpdetails.getDepartment())).append("_")
            .append(Getacronyms.getSemesterNumber(qpdetails.getSemester())).append("_")
            .append(qpdetails.getSubject()).append("_")
            .append(Getacronyms.getExamName(qpdetails.getExam())).append("_")
            .append(qpdetails.getRegulation())
            .toString();
    }

    public static String github_file_path_generator(QpSubmission qpdetails) {
        return new StringBuilder()
                .append(qpdetails.getDepartment()).append("/")
                .append(Getacronyms.getSemesterNumber(qpdetails.getSemester())).append("/")
                .append(qpdetails.getSubject()).append("/")
                .append(Getacronyms.getExamName(qpdetails.getExam())).append("/")
                .toString();
    }
    
}

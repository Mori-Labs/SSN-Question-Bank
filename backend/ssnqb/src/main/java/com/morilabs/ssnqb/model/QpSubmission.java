package com.morilabs.ssnqb.model;

public class QpSubmission {
    private String year;
    private String semester;
    private String department;
    private String subject;
    private String exam;
    private String regulation;
    private String newPaper;

    
    public String getYear() {
        return year;
    }

    public String getSemester() {
        return semester;
    }

    public String getDepartment() {
        return department;
    }

    public String getSubject() {
        return subject;
    }

    public String getExam() {
        return exam;
    }

    public String getRegulation() {
        return regulation;
    }

    public String getNewPaper() {
        return newPaper;
    }

   
    public void setYear(String year) {
        this.year = year;
    }

    public void setSemester(String semester) {
        this.semester = semester;
    }

    public void setDepartment(String department) {
        this.department = department;
    }

    public void setSubject(String subject) {
        this.subject = subject;
    }

    public void setExam(String exam) {
        this.exam = exam;
    }

    public void setRegulation(String regulation) {
        this.regulation = regulation;
    }

    public void setNewPaper(String newPaper) {
        this.newPaper = newPaper;
    }
}

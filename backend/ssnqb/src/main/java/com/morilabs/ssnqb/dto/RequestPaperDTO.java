package com.morilabs.ssnqb.dto;

public class RequestPaperDTO {
    private int year;
    private String semester;
    private String department;
    private String subject;
    private String exam;
    private String regulation;
    private String newPaper;

    public int getYear() { return year; }
    public void setYear(int year) { this.year = year; }

    public String getSemester() { return semester; }
    public void setSemester(String semester) { this.semester = semester; }

    public String getDepartment() { return department; }
    public void setDepartment(String department) { this.department = department; }

    public String getSubject() { return subject; }
    public void setSubject(String subject) { this.subject = subject; }

    public String getExam() { return exam; }
    public void setExam(String exam) { this.exam = exam; }

    public String getRegulation() { return regulation; }
    public void setRegulation(String regulation) { this.regulation = regulation; }

    public String isNewPaper() { return newPaper; }
    public void setNewPaper(String newPaper) { this.newPaper = newPaper; }
}

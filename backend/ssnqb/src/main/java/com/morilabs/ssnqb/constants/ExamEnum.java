package com.morilabs.ssnqb.constants;

public enum ExamEnum {

    CAT1("CAT-1"),
    CAT2("CAT-2"),
    SAT("SAT"),
    SEM("SEM");

    private final String exam;

    ExamEnum(String exam){
        this.exam = exam;
    }

    public String getExam(){
        return exam;
    }
    
}

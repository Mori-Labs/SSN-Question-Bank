package com.morilabs.ssnqb.constants;

public enum SemesterEnum {

    First("One"),
    Second("Two"),
    Third("Three"),
    Fourth("Four"),
    Fifth("Five"),
    Sixth("Six"),
    Seventh("Seven"),
    Eight("Eight");

    private final String label;

    SemesterEnum(String label) {
        this.label = label;
    }

    public String getLabel() {
        return label;
    }
}

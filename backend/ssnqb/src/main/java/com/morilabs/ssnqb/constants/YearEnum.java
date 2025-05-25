package com.morilabs.ssnqb.constants;

public enum YearEnum {
    Twenty_Two(2022),
    Twenty_Three(2023),
    Twenty_Four(2024),
    Twenty_Five(2025);

    private final int year;

    YearEnum(int year) {
        this.year = year;
    }

    public int getYear() {
        return year;
    }
}

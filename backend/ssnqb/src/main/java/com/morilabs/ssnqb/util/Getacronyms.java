package com.morilabs.ssnqb.util;
import java.util.Map;
import static java.util.Map.entry;

public class Getacronyms {
    private static final Map<String, String> DEPARTMENT_MAP = Map.ofEntries(
        entry("Information Technology", "IT"),
        entry("Electronics and Communication Engineering", "ECE"),
        entry("Electrical and Electronics Engineering", "EEE"),
        entry("Biomedical Engineering", "BME"),
        entry("Mechanical Engineering", "MECH"),
        entry("Computer Science and Engineering", "CSE"),
        entry("Chemical Engineering", "CHEM"),
        entry("Civil Engineering", "CIVIL")
    );
    
    
    public static String getAcronym(String fullName) {
        return DEPARTMENT_MAP.get(fullName);
    }

    private static final Map<String, String> SEMESTER_MAP = Map.ofEntries(
        entry("First", "1"),
        entry("Second", "2"),
        entry("Third", "3"),
        entry("Fourth", "4"),
        entry("Fifth", "5"),
        entry("Sixth", "6"),
        entry("Seventh", "7"),
        entry("Eighth", "8")
    );

    public static String getSemesterNumber(String longSemesterName) {
        return SEMESTER_MAP.get(longSemesterName);
    }

    private static final Map<String, String> EXAM_MAP = Map.ofEntries(
        entry("CAT-1", "CAT 1"),
        entry("CAT-2", "CAT 2")
    );

    public static String getExamName(String examName) {
        return EXAM_MAP.get(examName);
    }
}

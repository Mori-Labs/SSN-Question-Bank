package com.morilabs.ssnqb.controller;

import java.util.Arrays;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.stream.Collectors;

import org.springframework.web.bind.annotation.*;

import com.morilabs.ssnqb.constants.DepartmentEnum;
import com.morilabs.ssnqb.constants.ExamEnum;
import com.morilabs.ssnqb.constants.RegulationEnum;
import com.morilabs.ssnqb.constants.SemesterEnum;
import com.morilabs.ssnqb.constants.SubjectEnum;
import com.morilabs.ssnqb.constants.YearEnum;

@RestController
@RequestMapping("/api")
@CrossOrigin(origins = "http://localhost:3000") 
public class ConstantsController {
    
    @GetMapping("/contribute-constants")
    public static Map<String, List<?>> getAllStaticData() {
        Map<String, List<?>> dataMap = new HashMap<>();

        List<String> departments = Arrays.stream(DepartmentEnum.values())
                .map(e -> e.name().replace("_", " "))
                .collect(Collectors.toList());

        List<Integer> years = Arrays.stream(YearEnum.values())
                .map(YearEnum::getYear)
                .collect(Collectors.toList());

        List<String> semesters = Arrays.stream(SemesterEnum.values())
                .map(SemesterEnum::getLabel)
                .collect(Collectors.toList());

        List<String> subjects = Arrays.stream(SubjectEnum.values())
                .map(SubjectEnum::getDisplayName)
                .collect(Collectors.toList());

        List<String> exams = Arrays.stream(ExamEnum.values())
                .map(ExamEnum::getExam)
                .collect(Collectors.toList());

        List<String> regulations = Arrays.stream(RegulationEnum.values())
                .map(RegulationEnum::getRegulation)
                .collect(Collectors.toList());

        dataMap.put("departments", departments);
        dataMap.put("years", years);
        dataMap.put("semesters", semesters);
        dataMap.put("subjects", subjects);
        dataMap.put("exams", exams);
        dataMap.put("regulations", regulations);

        return dataMap;

        
    }

}

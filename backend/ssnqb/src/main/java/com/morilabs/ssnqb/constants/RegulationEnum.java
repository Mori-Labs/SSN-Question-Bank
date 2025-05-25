package com.morilabs.ssnqb.constants;

public enum RegulationEnum {

    R2021("R-2021"),
    R2018("R-2018");

    private final String regulation;

    RegulationEnum(String regulation){
        this.regulation = regulation;
    }

    public String getRegulation(){
        return regulation;
    }
    
}

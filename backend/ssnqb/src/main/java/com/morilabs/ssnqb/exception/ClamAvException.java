package com.morilabs.ssnqb.exception;

public class ClamAvException extends RuntimeException{

    public ClamAvException(String message) {
        super(message);
    }

    public ClamAvException(String message, Throwable cause) {
        super(message, cause);
    }
}
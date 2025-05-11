package com.morilabs.ssnqb.service;

import org.springframework.stereotype.Service;
import com.morilabs.ssnqb.exception.ClamAvException;

import java.io.*;
import java.net.Socket;

@Service
public class ClamAVService {

    private static final String CLAMAV_HOST = "localhost"; // Use "clamav" if in Docker Compose
    private static final int CLAMAV_PORT = 3310;

    public boolean scan(InputStream fileInputStream) {
        try (Socket socket = new Socket(CLAMAV_HOST, CLAMAV_PORT);
                OutputStream out = socket.getOutputStream();
                InputStream in = socket.getInputStream()) {

            out.write("zINSTREAM\0".getBytes());

            byte[] buffer = new byte[2048];
            int read;
            while ((read = fileInputStream.read(buffer)) >= 0) {
                byte[] size = {
                        (byte) ((read >> 24) & 0xFF),
                        (byte) ((read >> 16) & 0xFF),
                        (byte) ((read >> 8) & 0xFF),
                        (byte) (read & 0xFF)
                };
                out.write(size);
                out.write(buffer, 0, read);
            }

            out.write(new byte[] { 0, 0, 0, 0 }); // End of stream

            BufferedReader reader = new BufferedReader(new InputStreamReader(in));
            String result = reader.readLine();
            System.out.println("ClamAV result: " + result);

            if (result == null) {
                throw new ClamAvException("No response from ClamAV");
            }

            return result.trim().endsWith("OK");

        } catch (IOException e) {
            throw new ClamAvException("Error communicating with ClamAV", e);
        }
    }
}

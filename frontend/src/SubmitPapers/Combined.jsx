import Head from "./Head";
import SubjectDetails from "./SubjectDetails";
import QPDetails from "./Header";
import MoreDetails from "./MoreDetails";
import FileUpload from "./Upload";
import AcknowledgementCheckbox from "./AcknowledgementCheckBox";
import Alias from "./Alias";
import axios from 'axios';
import { useState } from "react";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Combined() {
    const [year, setYear] = useState('');
    const [semester, setSemester] = useState('');
    const [department, setDepartment] = useState('');
    const [subject, setSubject] = useState('');
    const [exam, setExam] = useState('');
    const [regulation, setRegulation] = useState('');
    const [newPaper, setNewPaper] = useState('');
    const [alias, setAlias] = useState('');
    const [file, setFile] = useState(null);

    const handleSubmit = async () => {
        const payload = {
            year,
            semester,
            department,
            subject,
            exam,
            regulation,
            newPaper,
        };
    
        const formData = new FormData();
        formData.append('metadata', JSON.stringify(payload));
    
        if (!file) {
            toast.error("Please upload a question paper before submitting.", {
                position: 'top-right',
                autoClose: 3000,
            });
            return;
        }
    
        formData.append('file', file);
    
        try {
            for (let [key, value] of formData.entries()) {
                console.log(key, value);
            }
            const response = await axios.post('http://localhost:8080/api/contribute', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });

            console.log(response)
    
            toast.success("Submission Successful", {
                position: 'top-right',
                autoClose: 3000,
            });
        } catch (error) {
            console.error('Error submitting:', error);
            toast.error("Submission Failed. Please try again.", {
                position: 'top-right',
                autoClose: 3000,
            });
        }
    };
    

    return (
        <>
            <Head  />
            <QPDetails setYear={setYear} setSemester={setSemester} setDepartment={setDepartment} />
            <SubjectDetails subject={subject} setSubject={setSubject} />
            <MoreDetails setExam={setExam} setRegulation={setRegulation} setNewPaper={setNewPaper} />
            <FileUpload file={file} setFile={setFile}/>
            <AcknowledgementCheckbox />
            <Alias handleSubmit={handleSubmit} />

            <ToastContainer />
        </>
    );
}

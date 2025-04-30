    import Head from "./Head";
    import SubjectDetails from "./SubjectDetails";
    import QPDetails from "./Header";
    import MoreDetails from "./MoreDetails";
    import FileUpload from "./Upload";
    import AcknowledgementCheckbox from "./AcknowledgementCheckBox";
    import Alias from "./Alias";
    import axios from 'axios';
    import { useState } from "react";

    export default function Combined() {
    const [year, setYear] = useState('');
    const [semester, setSemester] = useState('');
    const [department, setDepartment] = useState('');
    const [subject, setSubject] = useState('');

    const handleSubmit = async () => {
        const payload = {
        year,
        semester,
        department,
        subject,
        };

        try {
        const response = await axios.post('http://localhost:8080/api/contribute', payload);
        alert('Submission Successful!');
        } catch (error) {
        console.error('Error submitting:', error);
        alert('Submission Failed');
        }
    };

    return (
        <>
        <Head setYear={setYear} setSemester={setSemester} />
        <QPDetails setDepartment={setDepartment} />
        <SubjectDetails setSubject={setSubject} />
        <MoreDetails />
        <FileUpload />
        <AcknowledgementCheckbox />
        <Alias handleSubmit={handleSubmit} />
        </>
    );
    }

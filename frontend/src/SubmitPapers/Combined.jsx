import Head from "./Head";
import SubjectDetails from "./SubjectDetails";
import QPDetails from "./Header";
import MoreDetails from "./MoreDetails";
import FileUpload from "./Upload";
import AcknowledgementCheckbox from "./AcknowledgementCheckBox";
import Alias from "./Alias";
import axios from 'axios';
import { useEffect, useState } from "react";
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
    const [staticFormData, setstaticFormData] = useState({});
    const [staticYears, setstaicYears] = useState([]);
    const [staticSemesters, setStaticSemesters] = useState([]);
    const [staticDepartments, setStaticDepartments] = useState([]);
    const [staticSubjects, setStaticSubjects] = useState([]);
    const [staticExams, setStaticExams] = useState([]);
    const [staticregulations, setStaticRegulations] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:8080/api/contribute-constants")
            .then(response => {
                console.log(response.data);
                setstaticFormData(response.data);
                setstaicYears(response.data.years);
                setStaticSemesters(response.data.semesters);
                setStaticDepartments(response.data.departments);
                setStaticExams(response.data.exams);
                setStaticRegulations(response.data.regulations);
                setStaticSubjects(response.data.subjects);
            })
            .catch(error => {
                console.log('Error fetching static data: ', error);
            });
    }, []);

    console.log(staticFormData);

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

            console.log(response);

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
        <div className="min-h-screen bg-white text-gray-900 dark:bg-gray-900 dark:text-gray-100 transition-colors duration-300">
            <Head />
            
            {/* Pass down static data and setters */}
            <QPDetails 
                setYear={setYear} 
                setSemester={setSemester} 
                setDepartment={setDepartment} 
                Years={staticYears} 
                Semesters={staticSemesters} 
                Departments={staticDepartments} 
                className="dark:bg-gray-800 dark:text-gray-100"
            />
            
            <SubjectDetails 
                subject={subject} 
                setSubject={setSubject} 
                Subjects={staticSubjects} 
                className="dark:bg-gray-800 dark:text-gray-100"
            />
            
            <MoreDetails 
                setExam={setExam} 
                setRegulation={setRegulation} 
                setNewPaper={setNewPaper} 
                Exams={staticExams} 
                Regulations={staticregulations} 
                className="dark:bg-gray-800 dark:text-gray-100"
            />
            
            <FileUpload 
                file={file} 
                setFile={setFile} 
                className="dark:bg-gray-800 dark:text-gray-100"
            />
            
            <AcknowledgementCheckbox className="dark:text-gray-300" />
            
            <Alias handleSubmit={handleSubmit} className="dark:bg-gray-800 dark:text-gray-100" />
            
            <ToastContainer 
                theme="dark"  // react-toastify supports dark theme
            />
        </div>
    );
}

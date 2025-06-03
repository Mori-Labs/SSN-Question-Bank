import { useState, useEffect } from "react";
import Heading from "./Heading";
import Header from '../SubmitPapers/Header';
import SubjectDetails from "../SubmitPapers/SubjectDetails";
import MoreDetails from "../SubmitPapers/MoreDetails";
import SubjectName from './SubjectName';
import RequestPaper from './RequestPaper';
import Contribute from "./Contribute";
import axios from "axios";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function One() {
  const [year, setYear] = useState('');
  const [semester, setSemester] = useState('');
  const [department, setDepartment] = useState('');
  const [subject, setSubject] = useState('');
  const [exam, setExam] = useState('');
  const [regulation, setRegulation] = useState('');
  const [newPaper, setNewPaper] = useState('');
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

  return (
    <div className="min-h-screen bg-white text-gray-900 dark:bg-gray-950 dark:text-gray-200 transition-colors duration-300">
      <Heading className="dark:text-gray-200" />

      <Header
        setYear={setYear}
        setSemester={setSemester}
        setDepartment={setDepartment}
        Years={staticYears}
        Semesters={staticSemesters}
        Departments={staticDepartments}
        className="dark:bg-gray-900 dark:text-gray-200 dark:border-gray-700"
      />

      <SubjectDetails
        subject={subject}
        setSubject={setSubject}
        Subjects={staticSubjects}
        className="dark:bg-gray-900 dark:text-gray-200 dark:border-gray-700"
      />

      <MoreDetails
        setExam={setExam}
        setRegulation={setRegulation}
        setNewPaper={setNewPaper}
        Exams={staticExams}
        Regulations={staticregulations}
        className="dark:bg-gray-900 dark:text-gray-200 dark:border-gray-700"
      />

      <SubjectName className="dark:text-gray-200" />

      <RequestPaper
        year={year}
        semester={semester}
        department={department}
        subject={subject}
        exam={exam}
        regulation={regulation}
        newPaper={newPaper}
        className="dark:bg-gray-900 dark:text-gray-200 dark:border-gray-700"
      />

      <Contribute className="dark:bg-gray-900 dark:text-gray-200 dark:border-gray-700" />

      <ToastContainer theme="dark" />
    </div>
  );
}

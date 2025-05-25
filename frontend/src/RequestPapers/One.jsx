import { useState, useEffect } from "react";
import Heading from "./Heading"
import Header from '../SubmitPapers/Header'
import SubjectDetails from "../SubmitPapers/SubjectDetails"
import MoreDetails from "../SubmitPapers/MoreDetails"
import SubjectName from './SubjectName'
import RequestPaper from './RequestPaper'
import Contribute from "./Contribute"
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
            console.log(response.data)
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

  return (
    <>
      <Heading />
      <Header setYear={setYear} setSemester={setSemester} setDepartment={setDepartment} Years={staticYears} Semesters={staticSemesters} Departments={staticDepartments} />
      <SubjectDetails subject={subject} setSubject={setSubject} Subjects={staticSubjects} />
      <MoreDetails setExam={setExam} setRegulation={setRegulation} setNewPaper={setNewPaper} Exams={staticExams} Regulations={staticregulations}/>
      <SubjectName />
      <RequestPaper
        year={year}
        semester={semester}
        department={department}
        subject={subject}
        exam={exam}
        regulation={regulation}
        newPaper={newPaper}
      />
      <Contribute />
      <ToastContainer />
    </>
  );
}

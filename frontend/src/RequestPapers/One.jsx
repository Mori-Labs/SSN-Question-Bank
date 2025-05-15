import { useState } from "react";
import Heading from "./Heading"
import Header from '../SubmitPapers/Header'
import SubjectDetails from "../SubmitPapers/SubjectDetails"
import MoreDetails from "../SubmitPapers/MoreDetails"
import SubjectName from './SubjectName'
import RequestPaper from './RequestPaper'
import Contribute from "./Contribute"
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

  return (
    <>
      <Heading />
      <Header setYear={setYear} setSemester={setSemester} setDepartment={setDepartment}  />
      <SubjectDetails subject={subject} setSubject={setSubject} />
      <MoreDetails setExam={setExam} setRegulation={setRegulation} setNewPaper={setNewPaper}/>
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

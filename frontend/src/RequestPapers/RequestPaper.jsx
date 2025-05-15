import styled from 'styled-components';
import Button from '../Button';
import axios from 'axios';
import { toast } from 'react-toastify';

export default function RequestPaper({
  year, semester, department, subject, exam, regulation, newPaper
}) {
  const handleRequest = async () => {
    const payload = {
      year,
      semester,
      department,
      subject,
      exam,
      regulation,
      newPaper
    };

    try {
      const response = await axios.post('http://localhost:8080/api/request', payload);
      console.log('Request response:', response.data);

      toast.success("Request Submitted Successfully", {
        position: 'top-right',
        autoClose: 3000,
      });
    } catch (error) {
      console.error('Request error:', error);
      toast.error("Failed to submit request", {
        position: 'top-right',
        autoClose: 3000,
      });
    }
  };

  return (
    <div className='flex justify-center'>
      <Button name={'Request Paper'} onClick={handleRequest} />
    </div>
  );
}

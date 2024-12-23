import React from 'react';

const GradeInfo = ({ gradeInfo }) => {
  const { unique_id, course, student, date, grade } = gradeInfo;

  return (
    <div className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
      <h2 className="text-xl font-bold mb-4">{course}</h2>
      <p><strong>Student:</strong> {student.firstname} {student.lastname} (ID: {student.id})</p>
      <p><strong>Date:</strong> {date}</p>
      <p><strong>Grade:</strong> {grade}</p>
      <p className="text-sm text-gray-500 mt-2">Entry ID: {unique_id}</p>
    </div>
  );
};

export default GradeInfo;


import React from "react";

const GradeInfo = ({ gradeInfo }) => {
  const { unique_id, course, student, date, grade } = gradeInfo;

  return (
    <div className="bg-white rounded-lg shadow-md p-6 mb-8 transition-all duration-300 hover:shadow-lg">
      <h2 className="text-2xl font-bold mb-4 text-blue-600">{course}</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <p className="font-semibold text-gray-700">Student:</p>
          <p className="text-gray-600">
            {student.firstname} {student.lastname}
          </p>
          <p className="text-sm text-gray-500">ID: {student.id}</p>
        </div>
        <div>
          <p className="font-semibold text-gray-700">Date:</p>
          <p className="text-gray-600">{date}</p>
        </div>
        <div className="md:col-span-2">
          <p className="font-semibold text-gray-700">Grade:</p>
          <p
            className={`text-3xl font-bold ${
              grade >= 75
                ? "text-green-600"
                : grade >= 50
                ? "text-yellow-600"
                : "text-red-600"
            }`}
          >
            {grade}
          </p>
        </div>
      </div>
      <p className="text-sm text-gray-500 mt-4">Entry ID: {unique_id}</p>
    </div>
  );
};

export default GradeInfo;

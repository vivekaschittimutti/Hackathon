// src/components/Home.js
import React, { useEffect, useState } from 'react';

const Home = () => {
  const [students, setStudents] = useState([]); // Keep it as an array to store students
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchStudents = async () => {
      try {
        const response = await fetch('https://hackathonbackend-3.onrender.com/students');
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const contentType = response.headers.get("content-type");
        if (!contentType || !contentType.includes("application/json")) {
          throw new Error("Received non-JSON response from server");
        }

        const data = await response.json();
        console.log(data); // Log the entire response

        // Access the students array from the response object
        setStudents(data.students || []); // Set to empty array if students is undefined
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchStudents();
  }, []);

  if (loading) return <p>Loading students...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div style={{ padding: '1rem' }}>
      <h2>Welcome to My Website!</h2>
      <p>Explore our offerings and find what suits you best.</p>

      <h3>Student List</h3>
      <ul style={{ listStyleType: 'none', padding: 0 }}>
        {students.length > 0 ? (
          students.map((student) => (
            <li key={student.id} style={styles.studentCard}>
              <h4>{student.name}</h4>
              <p>Department: {student.department}</p>
              <p>Enrolled Courses: {student.enrolledCourses}</p>
            </li>
          ))
        ) : (
          <p>No students available to display.</p>
        )}
      </ul>
    </div>
  );
};

const styles = {
  studentCard: {
    padding: '1rem',
    margin: '0.5rem 0',
    border: '1px solid #ccc',
    borderRadius: '5px',
    backgroundColor: '#f9f9f9',
  },
};

export default Home;

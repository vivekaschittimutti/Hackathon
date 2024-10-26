// src/components/Teachers.js
import React, { useEffect, useState } from 'react';

const Teachers = () => {
  const [teachers, setTeachers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchTeachers = async () => {
      try {
        const response = await fetch('http://localhost:3000/teachers'); // Replace with your API endpoint
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const contentType = response.headers.get("content-type");
        if (!contentType || !contentType.includes("application/json")) {
          throw new Error("Received non-JSON response from server");
        }

        const data = await response.json();
        console.log(data); // Log the entire response
        setTeachers(data.teachers || []); // Access the teachers array
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchTeachers();
  }, []);

  if (loading) return <p>Loading teachers...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div style={{ padding: '1rem' }}>
      <h2>Teacher List</h2>
      <ul style={{ listStyleType: 'none', padding: 0 }}>
        {teachers.length > 0 ? (
          teachers.map((teacher) => (
            <li key={teacher.id} style={styles.teacherCard}>
              <h4>{teacher.name}</h4>
              <p>Department: {teacher.department}</p>
              <p>Ratings: {teacher.ratings}</p>
              <p>Research Projects: {teacher.researchProjects}</p>
              <p>Patents: {teacher.patents}</p>
              <p>Academic Background: {teacher.academicBackground}</p>
            </li>
          ))
        ) : (
          <p>No teachers available to display.</p>
        )}
      </ul>
    </div>
  );
};

const styles = {
  teacherCard: {
    padding: '1rem',
    margin: '0.5rem 0',
    border: '1px solid #ccc',
    borderRadius: '5px',
    backgroundColor: '#f9f9f9',
  },
};

export default Teachers;

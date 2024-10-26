// src/components/Courses.js
import React, { useEffect, useState } from 'react';

const Courses = () => {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchCourses = async () => {
      try {
        const response = await fetch('http://localhost:3000/courses'); // Replace with your API endpoint
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const contentType = response.headers.get("content-type");
        if (!contentType || !contentType.includes("application/json")) {
          throw new Error("Received non-JSON response from server");
        }

        const data = await response.json();
        console.log(data); // Log the entire response
        setCourses(data.courses || []); // Access the courses array
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchCourses();
  }, []);

  if (loading) return <p>Loading courses...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <div style={{ padding: '1rem' }}>
      <h2>Course List</h2>
      <ul style={{ listStyleType: 'none', padding: 0 }}>
        {courses.length > 0 ? (
          courses.map((course) => (
            <li key={course.id} style={styles.courseCard}>
              <h4>{course.name}</h4>
              <p>Course ID: {course.id}</p>
              <p>Type: {course.type}</p>
              <p>Prerequisites: {course.prerequisites}</p>
              <p>Semester Offered: {course.semesterOffered}</p>
            </li>
          ))
        ) : (
          <p>No courses available to display.</p>
        )}
      </ul>
    </div>
  );
};

const styles = {
  courseCard: {
    padding: '1rem',
    margin: '0.5rem 0',
    border: '1px solid #ccc',
    borderRadius: '5px',
    backgroundColor: '#f9f9f9',
  },
};

export default Courses;

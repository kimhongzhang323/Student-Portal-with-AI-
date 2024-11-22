import React, { useState, useEffect } from 'react';
import './App.css';
import { Heading, HStack, SimpleGrid, Text } from '@chakra-ui/react';
import AssignmentComponent from './components/Assignment';
import EnrolledComponent from './components/Enrolled';
import EnrolledLogo from './assets/courses.svg';
import AssignmentLogo from './assets/assignments.svg';
import { NavigationLayout } from './components/NavigationLayout';

export default function Homepage() {
  const [enrolledCourses, setEnrolledCourses] = useState([]);
  const [assignments, setAssignments] = useState([]);
  const [user, setUser] = useState(null); // New state for the user data

  // Fetch user data
  const fetchUserData = async () => {
    try {
      const userId = 1; // Replace with actual user ID
      const response = await fetch(`http://127.0.0.1:5000/api/users/${userId}`);
      const userData = await response.json();
      setUser(userData);
    } catch (error) {
      console.error('Error fetching user data:', error);
    }
  };
  

  // Fetch enrolled courses
  const fetchEnrolledCourses = async () => {
    try {
      const userId = 1; // Replace with actual user ID
      const response = await fetch(`/api/courses/enrolled?user_id=${userId}`);
      const courses = await response.json();
      setEnrolledCourses(courses);
    } catch (error) {
      console.error('Error fetching enrolled courses:', error);
    }
  };

  // Fetch assignments
  const fetchAssignments = async () => {
    try {
      const userId = 1; // Replace with actual user ID
      const response = await fetch(`/api/assignments?user_id=${userId}`);
      const assignmentsData = await response.json();
      setAssignments(assignmentsData);
    } catch (error) {
      console.error('Error fetching assignments:', error);
    }
  };

  // Fetch data when the component mounts
  useEffect(() => {
    fetchUserData();
    fetchEnrolledCourses();
    fetchAssignments();
  }, []);

  return (
    <div style={{ backgroundColor: 'white' }}>
      <NavigationLayout>
        {/* Display the user's name in the header */}
        {user && (
          <Heading textAlign={'start'} size={'2xl'}>
            Welcome back, {user.name}!
          </Heading>
        )}

        {/* Enrolled Courses Section */}
        <Heading marginTop={'10'} marginBottom={'3'} textAlign={'start'}>
          <HStack>
            <img src={EnrolledLogo} alt="Enrolled Courses" />
            Enrolled Courses
          </HStack>
        </Heading>
        <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} gap={'5'}>
          {enrolledCourses.length > 0 ? (
            enrolledCourses.map((course) => (
              <EnrolledComponent key={course.id} course={course} />
            ))
          ) : (
            <Text>No enrolled courses found</Text>
          )}
        </SimpleGrid>

        {/* Assignments Section */}
        <Heading marginTop={'10'} textAlign={'start'}>
          <HStack>
            <img src={AssignmentLogo} alt="Assignments" />
            Assignments
          </HStack>
        </Heading>
        <Text textAlign={'start'} marginBottom={'5'} color={'blackAlpha.600'} fontWeight={'medium'}>
          Not submitted assignments are shown here.
        </Text>
        <SimpleGrid columns={{ base: 1, md: 2, xl: 3 }} gap={'5'}>
          {assignments.length > 0 ? (
            assignments.map((assignment) => (
              <AssignmentComponent key={assignment.id} assignment={assignment} />
            ))
          ) : (
            <Text>No assignments found</Text>
          )}
        </SimpleGrid>
      </NavigationLayout>
    </div>
  );
}

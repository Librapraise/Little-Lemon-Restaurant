import React, { useReducer, useEffect } from 'react';
import { Navigate } from 'react-router-dom';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Nav from './Nav';
import HomePage from '../components/HomePage';
import BookingPage from '../components/BookingPage';
import Specials from '../components/Specials';
import ConfirmedBooking from '../components/ConfirmedBooking';



// Define your API functions
async function fetchAPI(date) {
  try {
    // Replace this with your actual API call to fetch available times for the given date
    const response = await fetchAPI(date);
    return response.data; // Assuming the API response contains an array of times
  } catch (error) {
    throw error;
  }
}

async function submitAPI(formData) {
  try {
    // Replace this with your actual API call to submit the booking form data
    const response = await submitAPI(formData);
    // Assuming the API returns a boolean indicating success
    return response.data.success; // Adjust this based on the actual API response structure
  } catch (error) {
    throw error;
  }
}


function Main() {

  // Function to submit the form data
  const submitForm = async (formData) => {
    try {
      const success = await submitAPI(formData);
      if (success) {
        // If submission is successful, navigate to the booking confirmation page
        return <Navigate to="/confirmation" />;
      } else {
        // Handle an unsuccessful submission, e.g., show an error message
        console.error('Booking submission failed');
      }
    } catch (error) {
      console.error('Error submitting data:', error);
    }
  };

  return (
    <>
      <Nav />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/booking" element={<BookingPage />} />
        <Route path="/confirmation" element={<ConfirmedBooking />} /> {/* Add this route for booking confirmation */}
        {/* Add more routes as needed */}
      </Routes>
    </>
  );
}

export default Main;

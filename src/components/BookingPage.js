import React, { useReducer, useEffect } from "react";
import BookingForm from '../components/BookingForm';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';



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

const initialTimes = {
  selectedDate: null, // This will be the selected date, initially set to null
  times: ['17:00', '18:00', '19:00', '20:00', '21:00', '22:00'], // Example allotted times
};


const timesReducer = (state, action) => {
  switch (action.type) {
    case 'SET_DATE':
      return { ...state, selectedDate: action.payload };
    case 'UPDATE_TIMES':
      return { ...state, times: action.payload };
    default:
      return state;
  }
};



function BookingPage() {

  const [availableTimes, dispatch] = useReducer(timesReducer, initialTimes);


  // Function to update available times using the fetchAPI function with the selected date
  const updateTimes = async (selectedDate) => {
    try {
      const response = await fetchAPI(selectedDate);
      dispatch({ type: 'UPDATE_TIMES', payload: response });
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  // Function to initialize available times using the fetchAPI function for today's date
  const initializeTimes = async () => {
    try {
      const response = await fetchAPI(/* pass the initial date if required */);
      dispatch({ type: 'UPDATE_TIMES', payload: response });
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  // Function to submit booking data using the submitAPI function
  const submitBooking = async (formData) => {
    try {
      const success = await submitAPI(formData);
      if (success) {
        // Handle a successful submission, e.g., show a success message
      } else {
        // Handle an unsuccessful submission, e.g., show an error message
      }
    } catch (error) {
      console.error('Error submitting data:', error);
    }
  }

  // Call the initializeTimes function when the component mounts
  useEffect(() => {
    initializeTimes();
  }, []);


    return (
      // Your table reservation page content
      <>
      
      <Routes>
        <Route
            path="/"
            element={
              <BookingForm
                availableTimes={availableTimes.times}
                dispatch={dispatch}
                updateTimes={updateTimes}
                submitBooking={submitBooking}
              />
            }
          />
        </Routes>

      </>
    );
}

export default BookingPage;
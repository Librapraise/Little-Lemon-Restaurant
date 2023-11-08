import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';

const BookingForm = ({ availableTimes, dispatch,  updateTimes, submitForm }) => {
  const [date, setDate] = useState('');
  const [time, setTime] = useState('17:00'); // Default to 17:00
  const [guests, setGuests] = useState(1); // Default to 1
  const [occasion, setOccasion] = useState('Birthday'); // Default to Birthday
  const [formData, setFormData] = useState(/* initialize your form data here */);

  // Function to store available times in localStorage
  const storeAvailableTimes = (updateTimes) => {
    localStorage.setItem('availableTimes', JSON.stringify(updateTimes));
  };

  // Function to retrieve available times from localStorage
  const getAvailableTimes = () => {
    const storedTimes = localStorage.getItem('availableTimes');
    if (storedTimes) {
      return JSON.parse(storedTimes);
    }
    return [];
  };

  useEffect(() => {
    // Retrieve available times from localStorage when the component mounts
    const storedTimes = getAvailableTimes();
    if (storedTimes.length > 0) {
      // Use the retrieved times to update your component state or display the available times
      setTime(storedTimes[0]); // Set the default time from localStorage
      // ... (other state updates)
    } else {
      // Handle the case when there are no times in localStorage
      // You might want to use a default set of times in this case
    }
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here, e.g., send data to a server
    submitForm(formData);
  };

  const handleDateChange = (e) => {
    const selectedDate = e.target.value;
    setDate(selectedDate);
    // Dispatch an action to update availableTimes based on the selected date
    dispatch({ type: 'CHANGE_TIMES', selectedDate });

    // Call the updateTimes function to fetch available times based on the selected date
    updateTimes(selectedDate);
  };
    const handleTimeChange = (e) => {
    const selectedTime = e.target.value;
    setTime(selectedTime); // Update the 'time' state variable with the selected time
  };

  return (
    <>
    <h2>Book Now</h2>
    <form style={{ display: 'grid', maxWidth: '200px', gap: '20px', }} onSubmit={handleSubmit}>
      <label htmlFor="res-date">Choose date</label>
      <input
        type="date"
        id="res-date"
        value={date}
        onChange={handleDateChange}
      />
      <label htmlFor="res-time">Choose time</label>
      <select id="res-time" value={time} onChange={handleTimeChange}>
        {availableTimes.map((availableTime, index) => (
          <option key={index} value={availableTime}>{availableTime}</option>
        ))}
      </select>
      <label htmlFor="guests">Number of guests</label>
      <input
        type="number"
        placeholder="1"
        min="1"
        max="10"
        id="guests"
        value={guests}
        onChange={(e) => setGuests(Number(e.target.value))}
      />
      <label htmlFor="occasion">Occasion</label>
      <select id="occasion" value={occasion} onChange={(e) => setOccasion(e.target.value)}>
        <option value="Birthday">Birthday</option>
        <option value="Anniversary">Anniversary</option>
      </select>
      <Link style={{ textDecoration: "none", border: 'solid 1px', color: 'black' }} to="/confirmation">Confirm Booking</Link>
    </form>
    </>
  );
};

export default BookingForm;

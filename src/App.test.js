import { render, screen } from '@testing-library/react';
import App from './App';
import { initializeTimes, updateTimes } from './BookingPage'; // Import the functions from your module
import BookingForm from './components/BookingForm';

test('renders BookingForm heading', () => {
  // render(<App />);
  //const linkElement = screen.getByText(/learn react/i);
  //expect(linkElement).toBeInTheDocument();
  render (<BookingForm/>);
  const headingElement = screen.getByText("Book Now");
  expect(headingElement).toBeInTheDocument();
});



// Mock the fetchAPI function to return data for testing
jest.mock('./BookikngPage', () => {
  return {
    fetchAPI: jest.fn(() => ['17:00', '18:00', '19:00', '20:00']),
  };
});

describe('initializeTimes', () => {
  it('should fetch and initialize available times', async () => {
    const result = await initializeTimes();
    expect(result).toEqual(['17:00', '18:00', '19:00', '20:00']);
  });
});

describe('updateTimes', () => {
  it('should update available times based on the selected date', async () => {
    const dispatch = jest.fn();
    const selectedDate = '2023-11-01'; // A pre-selected date
    await updateTimes(dispatch, selectedDate);
    expect(dispatch).toHaveBeenCalledWith({ type: 'CHANGE_TIMES', selectedDate, times: ['18:00', '19:00', '20:00'] });
  });
});

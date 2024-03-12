import React, {useState} from 'react'
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css'; // Import calendar css

export const BookingCalendar = () => {
    const [reservations, setReservations] = useState({
      '2024-03-04': [1, 2], // Room 1 and 2 are booked
      '2024-03-05': [1],    // Only Room 1 is booked
      '2024-03-06': [1],    // Only Room 1 is booked
      '2024-03-07': [2],    // Only Room 2 is booked
      '2024-03-08': [1, 2, 3, 4], // Room 2 and 3 are booked
      '2024-03-09': [2, 4], // Room 2 and 4 are booked
      '2024-03-10': [3],    // Only Room 3 is booked
      '2024-03-14': [4],    // Only Room 4 is booked
      '2024-03-15': [4],    // Only Room 4 is booked
    });
  
    const tileContent = ({ date, view }) => {
        if (view === 'month') {
          const dateString = date.toISOString().split('T')[0];
          return (
            <div className="dots">
              {reservations[dateString] ? reservations[dateString].map(room => (
                <span key={room} className={`dot room${room}-dot`}></span>
              )) : <span className="dot empty-dot"></span>}
            </div>
          );
        }
      };
    const tileDisabled = () => {
        return true; // Disable all tiles
      };
  
    return (
        <Calendar
          tileContent={tileContent}
          showNeighboringMonth={false}
          tileDisabled={tileDisabled}
        />
    );
  };
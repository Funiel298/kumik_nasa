'use client'

import { useState } from 'react';
import { useRouter } from 'next/navigation';
import { HiOutlineArrowLeft, HiOutlineArrowRight } from 'react-icons/hi';

export default function Home() {
  const router = useRouter();
  const [currentMonth, setCurrentMonth] = useState(new Date().getMonth());
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());
  const [selectedDate, setSelectedDate] = useState(null);

  // Example data for the days of the current month
  const seismicData = {
    1: 2,
    2: 10,
    3: 15,
    4: 30,
    5: 5,
    6: 22,
    7: 0,
    9:11,
    13:45,
    19:42,
    22:15,
    23: 16
  };

  const daysInMonth = (month: number, year: number) => {
    return new Date(year, month + 1, 0).getDate();
  };

  // Get the days for the current month
  const days = Array.from({ length: daysInMonth(currentMonth, currentYear) }, (_, index) => index + 1);

  // Function to navigate to the next month
  const nextMonth = () => {
    if (currentMonth === 11) {
      setCurrentMonth(0);
      setCurrentYear(currentYear + 1);
    } else {
      setCurrentMonth(currentMonth + 1);
    }
  };

  // Function to navigate to the previous month
  const prevMonth = () => {
    if (currentMonth === 0) {
      setCurrentMonth(11);
      setCurrentYear(currentYear - 1);
    } else {
      setCurrentMonth(currentMonth - 1);
    }
  };

  // Handle clicking on a date and navigate to a new page with the date
  const handleDateClick = (day: number) => {
    setSelectedDate(day);
    router.push(`/main/${currentYear}-${currentMonth + 1}-${day}`);
  };

  // Function to determine the color based on the number of seismic events
  const getColor = (count: number) => {
    if (count > 20) return 'bg-red-500'; // High seismic activity
    if (count > 10) return 'bg-yellow-500'; // Medium activity
    return 'bg-green-500'; // Low activity
  };

  return (
    <div
      className='w-full items-center flex flex-col text-white'
      style={{
        backgroundImage: 'url(https://starwalk.space/gallery/images/mars-the-ultimate-guide/1920x1080.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        height: '100vh',
      }}
    >
      <h1 className='text-4xl font-bold m-5'>Find any seismic activity in mars</h1>

      <div className="calendar-container w-2/3 m-5">
        <div className="calendar-header flex justify-between p-4">
          <button className='flex flex-row' onClick={prevMonth}>
            <HiOutlineArrowLeft className='text-2xl' /> Previous Month
          </button>
          <h2>{`${new Date(currentYear, currentMonth).toLocaleString('default', { month: 'long' })} ${currentYear}`}</h2>
          <button className='flex flex-row-reverse' onClick={nextMonth}>
            <HiOutlineArrowRight className='text-2xl' /> Next Month
          </button>
        </div>

        <div className="calendar text-black grid grid-cols-7 gap-4 p-4">
          {days.map((day, index) => (
            <div
              key={index}
              className={`date-item p-8 text-center border rounded cursor-pointer ${selectedDate === day ? 'bg-blue-500 text-white' : getColor(seismicData[day] || 0)}`}
              onClick={() => handleDateClick(day)}
            >
              {day}
            </div>
          ))}
        </div>
      </div>

      
    </div>
  );
}

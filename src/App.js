import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar.js';
import Filter from './Components/Filter.js';
import MainCard from './Components/MainCard.js';
import { apiUrl, filterData } from './data.js';
import { useState, useEffect } from 'react';
import { toast } from "react-toastify";

function App() {

  const [courses, setCourses] = useState({});

  useEffect(() => {

    const fetchData = async () => {
      try {
        const res = await fetch(apiUrl);
        const output = await res.json();

        setCourses(output.data);

      } catch (error) {
        toast.error("Something Went Wrong!");
      }
    };

    fetchData();

  }, []);

  return (
    <div className="App">
      <Navbar />
      <Filter filterData={filterData} />
      <MainCard courses={courses} />
    </div>
  );
}

export default App;
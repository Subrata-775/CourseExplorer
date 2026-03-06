import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar.js';
import Filter from './Components/Filter.js';
import MainCard from './Components/MainCard.js';
import { apiUrl, filterData } from './data.js';
import { useState, useEffect } from 'react';
import { toast } from "react-toastify";
import Spinner from './Components/Spinner.js';


function App() {

  const [courses, setCourses] = useState({});
  const [loading, setLoading] = useState(true);

  const fetchData = async () => {
    setLoading(true);
    try {
      const res = await fetch(apiUrl);
      const output = await res.json();

      setCourses(output.data);

    } catch (error) {
      toast.error("Something Went Wrong!");
    }
    setLoading(false);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <div className="App  min-h-screen flex flex-col">
      <div>
        <Navbar />
      </div>
      <div className='bg-gray-700'>

        <div>
          <Filter filterData={filterData} />
        </div>
        <div className='w-11/12 max-w-[1200px] mx-auto
         flex flex-wrap justify-center items-center min-h-[50vh]'>
          {loading ? (<Spinner />) : (<MainCard courses={courses} />)}
        </div>
      </div>


    </div>
  );
}

export default App;
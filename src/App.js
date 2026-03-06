
import './App.css';
import Navbar from './Components/Navbar.js';
import Filter from './Components/Filter.js';
import MainCard from './Components/MainCard.js';
import { apiUrl, filterData } from './data.js';
import { useState, useEffect } from 'react';
import { toast } from "react-toastify";
import Spinner from './Components/Spinner.js';
import Footer from './Components/Footer.js';


function App() {

  const [courses, setCourses] = useState({});
  const [loading, setLoading] = useState(true);
  const [catagory, setCatagory] = useState(filterData[0].title)

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
    <div className="App  min-h-screen flex flex-col bg-gray-700">
      <div>
        <Navbar />
      </div>
      <div className="flex-grow">

        <div>
          <Filter filterData={filterData}
            catagory={catagory}
            setCatagory={setCatagory} />
        </div>
        <div className='w-11/12 max-w-[1200px] mx-auto
         flex flex-wrap justify-center items-center min-h-[50vh]'>
          {loading ? (<Spinner />) : (<MainCard courses={courses} catagory={catagory} />)}
        </div>
      </div>
      <div>
        <Footer />
      </div>


    </div>
  );
}

export default App;
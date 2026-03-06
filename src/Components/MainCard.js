

import React from 'react'
import Card from './Card'
import { useState } from 'react';

function MainCard({ courses, catagory }) {

    const [likedCourse, setLikedCourse] = useState([]);

    //  show all  cards  if i select All 

    const getcourses = () => {
        if (catagory === 'All') {
            const allCourse = [];
            Object.values(courses).forEach((courseCatagory) => {
                courseCatagory.forEach(course => {
                    allCourse.push(course);
                });
            })
            return allCourse;
        } else {
            // show only this catagory
            return courses[catagory];
        }
    }



    return (
        <div className='flex flex-wrap justify-center gap-4 mb-4'>
            {
                getcourses().map((course) => {
                    return <Card key={course.id} course={course}
                        likedCourse={likedCourse} setLikedCourse={setLikedCourse}
                    />
                })
            }

        </div>
    )
}

export default MainCard
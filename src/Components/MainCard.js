

import React from 'react'
import Card from './Card'
import { useState } from 'react';

function MainCard({ courses }) {

    const [likedCourse, setLikedCourse] = useState([]);


    const allCourse = [];
    const getcourses = () => {
        Object.values(courses).forEach((courseCatagory) => {
            courseCatagory.forEach(course => {
                allCourse.push(course);
            });
        })
        return allCourse;
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
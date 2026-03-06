

import React from 'react'
import Card from './Card'

function MainCard({ courses }) {
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
        <div>
            {
                getcourses().map((course) => {
                    return <Card key={course.id} course={course} />
                })
            }

        </div>
    )
}

export default MainCard
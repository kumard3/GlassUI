import React from 'react'
import About from './About'

import '../styles/Instructor.css'
import InstructorCard from '../InstructorCard'

function Instructors(props) {
    return (
        <div className="instructor">
            <div className="instructor__main">
                <About />
                <InstructorCard/>
            </div>
        </div>
    )
}

export default Instructors

import React from 'react'
import InstructorData from './data'
import Card from './Card'
import './styles/InstructorCard.css'
function createCard(data) {
    return (
        <div className="main__card">
            <Card name={data.name} image={data.image} description={data.description} />
        </div>
    )
}

function InstructorCard() {
    return (
        <div className="card__main">
        
            <div className="instructor__card">
                {InstructorData.map(createCard)}
            </div>
        </div>
    )
}

export default InstructorCard

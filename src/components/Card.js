import React from 'react'
import './styles/Card.css'


function Card(props) {
    return (
        <div className="card">
            <div className="card__main">
                <h1 className="card__h1">{props.name}</h1>
                <img className="card__img"  />
                <h2 className="card__h2">{props.description}</h2>
            </div>
        </div>
    )
}

export default Card


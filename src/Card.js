import { useState } from 'react'
import './Card.css'


export default function Card ({name, species, image, status, gender, location, origin}) {

    const icon = species === 'Human' ? '👤' : '👽'
    const [showDetails, setShowDetails] = useState(false)

    return (
        <section className='Card'>
            <header>
                {name} {icon}
            </header>
            <img src={image} alt=''/>
            <button 
            onClick={() => setShowDetails(!showDetails)}
            className='Button'>{showDetails ? 'Hide Details' : 'Show Details'}</button>
            {showDetails && <ul>
                <li>{status}</li>
                <li>{gender}</li>
                <li>{location}</li>
                <li>{origin}</li>
            </ul>}
        </section>
    )
}













































/*
export default function Card({name, species, image, status, gender, location, origin }) {
    const icon = species === 'Human' ? '👤' : '👽'

    const [showDeatails, setShowDetails] = useState(false)
    return (
        <section className='Card'>
            {name} {icon} 
            <img src={image} alt="" />
            <button onClick={event => {
                event.stopPropagation()
                setShowDetails(!showDeatails)
            }} 
            className='Button'>
                {showDeatails ? 'Hide Details' : 'Show Details'}
            </button>
            {showDeatails && <ul>
                <li>{status}</li>
                <li>{gender}</li>
                <li>{origin}</li> 
                <li>{location}</li>
            </ul>}
            </section>
    )
}

*/
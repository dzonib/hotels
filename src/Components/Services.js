import React, { useState } from 'react'
import Title from './Title'
import { FaCocktail, FaHiking, FaShuttleVan, FaBeer } from 'react-icons/fa'

export default function Services() {
    const initialState = [
        {
            icon: <FaCocktail />,
            title: 'Free Coctails',
            info:
                'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Necessitatibus, aut?'
        },
        {
            icon: <FaHiking />,
            title: 'Endless Hiking',
            info:
                'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Necessitatibus, aut?'
        },
        {
            icon: <FaShuttleVan />,
            title: 'free shuttle',
            info:
                'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Necessitatibus, aut?'
        },
        {
            icon: <FaBeer />,
            title: 'strongest beer',
            info:
                'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Necessitatibus, aut?'
        }
    ]
    const [services] = useState(initialState)
    return (
        <section className='services'>
            <Title title='services' />
            <div className='services-center'>
                {services.map(({ icon, title, info }, i) => {
                    return (
                        <article className="service" key={i}>
                            <span>{icon}</span>
                            <h6>{title}</h6>
                            <p>{info}</p>
                        </article>
                    )
                })}
            </div>
        </section>
    )
}

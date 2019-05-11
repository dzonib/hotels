import React from 'react'
import Hero from '../Components/Hero'
import Banner from '../Components/Banner'
import { Link } from 'react-router-dom'
import Services from '../Components/Services'
import FeaturedRooms from '../Components/FeaturedRooms';

export default function Home() {
    return (
        <>
            <Hero className='defaultHero'>
                <Banner
                    title='luxurious rooms'
                    subtitle='deluxe rooms strting at $299'
                >
                    <Link to='/rooms' className='btn-primary'>
                        our rooms
                    </Link>
                </Banner>
            </Hero>
            <Services />
            <FeaturedRooms />
        </>
    )
}

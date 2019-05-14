import React, { useContext } from 'react'
import { RoomContext } from '../context'
import Title from './Title'

export default function RoomFilter() {
    const {
        handleChange,
        type,
        capacity,
        price,
        minPrice,
        maxPrice,
        minSize,
        maxSize,
        breakfast,
        pets
    } = useContext(RoomContext)

    return <section className="filter-container">
      <Title title="search rooms"/>
    </section>
}

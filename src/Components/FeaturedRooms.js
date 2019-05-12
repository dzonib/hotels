import React, { useContext } from 'react'
import { RoomContext } from '../context'
import Loading from './Loading'
import Room from './Room'
import Title from './Title'

export default function FeaturedRooms() {
    // get value u provided in context file
    const { featuredRooms: rooms, loading } = useContext(RoomContext)

    const roomsToDisplay = rooms.map(room => {
        return <Room key={room.id} room={room}/>
    })

    return (
        <section className="featured-rooms">
            <Title title="featured rooms"/>
            <div className="featured-rooms-center">
                {loading ? <Loading /> : roomsToDisplay}
            </div>
        </section>
    )
}

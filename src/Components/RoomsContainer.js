import React, { useContext } from 'react'

import { RoomContext } from '../context'
import RoomsFilter from './RoomsFilter'
import RoomList from './RoomList'
import Loading from './Loading'

export default function RoomsContainer() {
    const { loading, sortedRooms, rooms } = useContext(RoomContext)

    console.log(loading)
    
    if (loading) {
        return <Loading />
    } else {
        return (
            <div>
                helloo from rooms container
                <RoomsFilter rooms={rooms} />
                <RoomList rooms={sortedRooms} />
            </div>
        )
    }
}

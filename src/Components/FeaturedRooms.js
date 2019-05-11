import React, { useContext } from 'react'
import { RoomContext } from '../context'

export default function FeaturedRooms() {
    // get value u provided in context file
    const test = useContext(RoomContext)

    console.log(test)

    return <div>hello from featured rooms, {test.greeting} {test.name}</div>
}

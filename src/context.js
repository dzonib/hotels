import React, { createContext, useState, useEffect } from 'react'
import items from './data'

const RoomContext = createContext()

// wrap all in index.js with provider
function RoomProvider({ children }) {
    const initialState = {
        rooms: [],
        sortedRooms: [],
        featuredRooms: [],
        loading: true
    }

    const [state, modifyState] = useState(initialState)

    useEffect(() => {
        const formatedRooms = formatData(items)
        const featuredRooms = formatedRooms.filter(room => room.featured)
        modifyState({
            rooms: formatedRooms,
            sortedRooms: formatedRooms,
            featuredRooms,
            loading: false
        })
    }, [])

    function formatData(items) {
        let tempItems = items.map(item => {
            let id = item.sys.id
            let images = item.fields.images.map(img => img.fields.file.url)
            let room = { ...item.fields, images, id }

            return room
        })

        return tempItems
    }

    function getRoom(slug) {
        let tempRooms = [...state.rooms]
        const room = tempRooms.find(room => room.slug === slug)

        return room
    }

    return (
        <RoomContext.Provider value={{ ...state, getRoom }}>
            {children}
        </RoomContext.Provider>
    )
}

const RoomConsumer = RoomContext.Consumer

export { RoomProvider, RoomConsumer, RoomContext }

import React, { createContext, useState, useEffect } from 'react'
import items from './data'

const RoomContext = createContext()

// wrap all in index.js with provider
function RoomProvider({ children }) {
    const initialState = {
        rooms: [],
        sortedRooms: [],
        featuredRooms: [],
        loading: true,
        type: 'all',
        capacity: 1,
        price: 0,
        minPrice: 0,
        maxPrice: 0,
        minSize: 0,
        maxSize: 0,
        breakfast: false,
        pets: false
    }

    const [state, modifyState] = useState(initialState)

    useEffect(() => {
        const formatedRooms = formatData(items)
        const featuredRooms = formatedRooms.filter(room => room.featured)

        // get most expensive room price and spread array into int value
        let maxPrice = Math.max(...formatedRooms.map(item => item.price))

        let maxSize = Math.max(...formatedRooms.map(item => item.size))

        console.log(maxPrice)
        modifyState({
            rooms: formatedRooms,
            sortedRooms: formatedRooms,
            featuredRooms,
            loading: false,
            price: maxPrice,
            maxPrice,
            size: maxSize
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

    function handleChange(event) {
        const type = event.target.type
        const name = event.target.name
        const value = event.target.value

        console.log(type, name, value)
    }

    function filterRooms(event) {
        console.log('hello')
    }

    return (
        <RoomContext.Provider value={{ ...state, getRoom, handleChange }}>
            {children}
        </RoomContext.Provider>
    )
}

const RoomConsumer = RoomContext.Consumer

export { RoomProvider, RoomConsumer, RoomContext }

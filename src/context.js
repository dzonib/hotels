import React, { createContext, useState } from 'react'

const RoomContext = createContext()

// wrap all in index.js with provider
function RoomProvider({ children }) {
    const initialState = {
        greeting: "Hello",
        name: "John"
    }

    const [state] = useState(initialState)
    
    return (
        <RoomContext.Provider value={state}>{children}</RoomContext.Provider>
    )
}

const RoomConsumer = RoomContext.Consumer

export { RoomProvider, RoomConsumer, RoomContext }

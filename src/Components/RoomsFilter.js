import React, { useContext } from "react";
import { RoomContext } from "../context";
import Title from "./Title";

export default function RoomFilter({ rooms }) {
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
    pets,
  } = useContext(RoomContext);

  return (
    <section className="filter-container">
      <Title title="search rooms" />
      <form className="filter-form">
        {/* select type */}
        <div className="form-group">
          <label htmlFor="type">room type</label>
          <select
            name="type"
            id="type"
            value={type}
            className="form-control"
            onChange={handleChange}
          >
            { rooms.reduce((accumulation, room) => {

              accumulation = accumulation.includes(room.type) ?
                                            [...accumulation] :
                                            [...accumulation, room.type]
              
              return accumulation                              
            }, []).map(room => {
              return <option key={room} value={room}>{room}</option>
            })}
          </select>
        </div>
        {/* end of select type */}
      </form>
    </section>
  );
}

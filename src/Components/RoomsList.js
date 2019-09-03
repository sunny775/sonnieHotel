import React from "react";
import Room from "./Room";

const RoomsList = ({ rooms }) => {
  if (!rooms)
    return (
      <div className="empty-search">
        <h3>no match found</h3>
      </div>
    );
  return (
    <section className="roomslist">
      <div className="roomslist-center">
        {rooms.map(item => {
          return <Room key={item.id} room={item} />;
        })}
      </div>
    </section>
  );
};

export default RoomsList;

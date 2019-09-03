import React from "react";
import { RoomConsumer } from "../Context";
import Title from "./Title";
import Loading from "./Loading";
import Room from "./Room";

const FeaturedRooms = () => {
  return (
    <div>
      <RoomConsumer>
        {value => {
          const { featuredRooms: featured, loading } = value;
          return (
            <section className="featured-rooms">
              <Title title="featured-rooms" />
              <div className="featured-rooms-center">
                {loading ? (
                  <Loading />
                ) : (
                  featured.map(room => {
                    return <Room key={room.id} room={room} />;
                  })
                )}
              </div>
            </section>
          );
        }}
      </RoomConsumer>
    </div>
  );
};

export default FeaturedRooms;

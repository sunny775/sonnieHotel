import React, { useState, useEffect } from "react";
import Banner from "../Components/Banner";
import { Link } from "react-router-dom";
import { RoomConsumer } from "../Context";
import { StyledHero } from "../Components/StyledStuff";

const SingleRoom = props => {
  //console.log(props)
  const [slug, setslug] = useState("");
  useEffect(() => setslug(props.match.params.slug), [props.match.params.slug]);
  return (
    <div>
      <RoomConsumer>
        {value => {
          const { getRoom } = value;
          const room = getRoom(slug);
          if (!room) {
            return (
              <div className="error">
                <h1>no such room found</h1>
                <Link to="/rooms" className="btn-primary">
                  back to rooms
                </Link>
              </div>
            );
          }
          const {
            name,
            description,
            capacity,
            size,
            price,
            extras,
            breakfast,
            pets,
            images
          } = room;
          const [mainImg, ...defautImg] = images;
          //check MDN array destructuring
          return (
            <>
              <StyledHero img={mainImg}>
                <Banner title={`${name} room`}>
                  <Link to="/rooms" className="btn-primary">
                    back to rooms
                  </Link>
                </Banner>
              </StyledHero>
              <section className="single-rooom">
                <div className="single-room-images">
                  {defautImg.map((item, i) => {
                    return <img key={item + i} src={item} alt={name} />;
                  })}
                </div>
                <div className="single-room-info">
                  <article className="desc">
                    <h3>details</h3>
                    <p>{description}</p>
                  </article>
                  <article className="info">
                    <h3>info</h3>
                    <h6>price : ${price}</h6>
                    <h6>size : {size} SQFT</h6>
                    <h6>
                      max capcity :
                      {capacity > 1
                        ? ` ${capacity} people`
                        : ` ${capacity} person`}
                    </h6>
                    <h6>{pets ? "pets allowed" : "no pets allowed"}</h6>
                    <h6>{breakfast && "free breakfast included"}</h6>
                  </article>
                </div>
              </section>
              <section className="room-extras">
                <h6>extras</h6>
                <ul className="extras">
                  {extras.map((item, i) => {
                    return <li key={item + i}>-{item}</li>;
                  })}
                </ul>
              </section>
            </>
          );
        }}
      </RoomConsumer>
    </div>
  );
};

export default SingleRoom;

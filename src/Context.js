import React, { useState, useEffect } from "react";
import items from "./data";

const RoomContext = React.createContext();

const RoomProvider = props => {
  const [rooms, setrooms] = useState([]);
  const [sortedRooms, setsortedRooms] = useState([]);
  const [featuredRooms, setfeaturedRooms] = useState([]);
  const [loading, setloading] = useState(true);
  //==============================================>
  //filter variables
  const [type, settype] = useState("");
  const [price, setprice] = useState(0);
  const [capacity, setcapacity] = useState(1);
  const [minPrice, setminPrice] = useState(0);
  const [maxPrice, setmaxPrice] = useState(0);
  const [minSize, setminSize] = useState(0);
  const [maxSize, setmaxSize] = useState(0);
  const [breakfast, setbreakfast] = useState(false);
  const [pets, setpets] = useState(false);
  //=================================================>
  useEffect(() => {
    filterRooms();
  });

  useEffect(() => {
    let rooms = formatData(items);
    let featured = rooms.filter(room => room.featured);
    let maxPrice = Math.max(...rooms.map(item => item.price));
    let minPrice = Math.min(...rooms.map(item => item.price));
    //console.log(maxPrice);
    let maxSize = Math.max(...rooms.map(item => item.size));
    let minSize = Math.min(...rooms.map(item => item.size));
    setfeaturedRooms(featured);
    setrooms(rooms);
    setsortedRooms(rooms);
    setloading(false);
    setmaxPrice(maxPrice);
    setmaxSize(maxSize);
    setminPrice(minPrice);
    setminSize(minSize);
    settype("all");
    setprice(maxPrice);
    setmaxSize(maxSize);
  }, []);
  //==================================================>
  function getRoom(slug) {
    let temRooms = [...rooms];
    const room = temRooms.find(room => room.slug === slug);
    return room;
  }
  //==============filter methods=====================>
  const handleChange = event => {
    const { value, name } = event.target;
    name === "type" && settype(value);
    name === "capacity" && setcapacity(parseFloat(value));
    name === "price" && setprice(parseFloat(value));
    name === "maxSize" && setmaxSize(parseFloat(value));
    name === "minSize" && setminSize(parseFloat(value));
    name === "breakfast" && setbreakfast(Boolean(value));
    name === "pets" && setpets(Boolean(value));
  };

  const filterRooms = () => {
    let tempRooms = [...rooms];
    //filter by type
    if (type !== "all") tempRooms = tempRooms.filter(r => r.type === type);
    //filter by capacity
    if (capacity !== 1)
      tempRooms = tempRooms.filter(r => r.capacity >= capacity);
    //filter by price
    tempRooms = tempRooms.filter(r => r.price <= price);
    //filter by size
    tempRooms = tempRooms.filter(r => r.size >= minSize && r.size <= maxSize);
    //filter by breakfast
    if (breakfast) tempRooms = tempRooms.filter(r => r.breakfast);
    //filter by pets
    if (pets) tempRooms = tempRooms.filter(r => r.pets);

    //update state
    setsortedRooms(tempRooms);
  };
  //==================================================>
  const value = {
    rooms,
    featuredRooms,
    loading,
    getRoom,
    sortedRooms,
    handleChange,
    type,
    price,
    capacity,
    minPrice,
    maxPrice,
    minSize,
    maxSize,
    breakfast,
    pets
  };

  return (
    <RoomContext.Provider value={value}>{props.children}</RoomContext.Provider>
  );
};
//===============================================>
function formatData(items) {
  let tempItems = items.map(item => {
    let id = item.sys.id;
    let images = item.fields.images.map(image => {
      return image.fields.file.url;
    });
    let room = { ...item.fields, images, id };
    return room;
  });
  return tempItems;
}
//===================================================>

const RoomConsumer = RoomContext.Consumer;
export { RoomProvider, RoomConsumer, RoomContext };

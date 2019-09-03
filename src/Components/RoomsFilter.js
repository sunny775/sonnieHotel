import React, { useContext } from "react";
import { RoomContext } from "../Context";
import Title from "../Components/Title";

//=========================================>
function deleteNth(arr, x) {
  var cache = {};
  return arr.filter(function(n) {
    cache[n] = (cache[n] || 0) + 1;
    return cache[n] <= x;
  });
}
/*const getUnique = (items, value) => {
  return [...new Set(items.map(item => item[value]))];
};*/
//=========================================>

const RoomsFilter = ({ rooms }) => {
  const context = useContext(RoomContext);
  //console.log(context);
  const {
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
  } = context;
  //=========================================>
  //get unique types
  /*let types = getUnique(rooms, "type");*/
  let types = rooms.map(room => room.type);

  types = deleteNth(types, 1);
  //add the 'all' value
  types = ["all", ...types];
  //map to jsx
  types = types.map((item, i) => {
    return (
      <option value={item} key={item + i}>
        {item}
      </option>
    );
  });
  //========================================>
  let people = rooms.map(r => r.capacity);
  people = deleteNth(people, 1);
  people = people.map((item, i) => {
    return (
      <option value={item} key={item + i}>
        {item}
      </option>
    );
  });
  //========================================>
  return (
    <section className="filter-container">
      <Title title="search rooms" />
      <form className="filter-form">
        {/*select type*/}
        <div className="form-group">
          <label htmlFor="type">room type</label>
          <select
            name="type"
            id="type"
            value={type}
            className="form-control"
            onChange={handleChange}
          >
            {types}
          </select>
        </div>
        {/*end of select type*/}
        {/*guests*/}
        <div className="form-group">
          <label htmlFor="capacity">guests</label>
          <select
            name="capacity"
            id="capacity"
            value={capacity}
            className="form-control"
            onChange={handleChange}
          >
            {people}
          </select>
        </div>
        {/*end of guests*/}
        {/*room price*/}
        <div className="form-group">
          <label htmlFor="price">room price ${price}</label>
          <input
            type="range"
            name="price"
            min={minPrice}
            max={maxPrice}
            id="price"
            value={price}
            onChange={handleChange}
            className="form-control"
          />
        </div>
        {/*end of room price*/}
        {/*price*/}
        <div className="form-group">
          <label htmlFor="size">room size</label>
          <div className="size-inputs">
            <input
              type="number"
              name="minSize"
              id="size"
              value={minSize}
              onChange={handleChange}
              className="size-input"
            />
            <input
              type="number"
              name="maxSize"
              id="size"
              value={maxSize}
              onChange={handleChange}
              className="size-input"
            />
          </div>
        </div>
        {/*end of price*/}
        {/*extras*/}
        <div className="form-group">
          <div className="sigle-extra">
            <input
              type="checkbox"
              name="breakfast"
              id="breakfast"
              checked={breakfast}
              onChange={handleChange}
            />
            <label htmlFor="breakfast">breakfast</label>
          </div>
          <div className="sigle-extra">
            <input
              type="checkbox"
              name="pets"
              id="pets"
              checked={pets}
              onChange={handleChange}
            />
            <label htmlFor="pets">pets</label>
          </div>
        </div>
        {/*end of extras*/}
      </form>
    </section>
  );
};

export default RoomsFilter;

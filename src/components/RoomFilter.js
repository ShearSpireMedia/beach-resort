import React from 'react';
import {useContext} from 'react';
import {RoomContext} from '../context';
import Title from '../components/Title';

//Here we use the useContext hook to allow us to get the context in a functional component
const getUnique = (items,value) => {
    return [...new Set(items.map(item => item[value]))];
};


function RoomFilter({rooms}) {
    console.log(rooms);
    let types = getUnique(rooms,"type");
    types = ['all',...types];
    let capacities = getUnique(rooms,"capacity");
    let prices = getUnique(rooms,"price");
    console.log(types,prices);
    types = types.map((item,index) => {
        return <option value={item} key={index}>{item}</option>
    });
    capacities = capacities.map((item,index) => {
        return <option value={item} key={index}>{item}</option>
    });
    const context = useContext(RoomContext);
    const {
        handleChange,type,capacity,price,minPrice,maxPrice,minSize,maxSize,breakfast,pets
    } = context;
    return (
        <section className="filter-container">
            <Title title="Search rooms" />
            <form className="filter-form">
                <div className="form-group">
                    <label htmlFor="type">room type</label>
                    <select name="type" id="type" value={type} className="form-control" onChange={handleChange}>
                        {types}
                    </select>
                </div>
                <div className="form-group">
                    <label htmlFor="capacity">Guests</label>
                    <select name="capacity" id="capacity" value={capacity} className="form-control" onChange={handleChange}>
                        {capacities}
                    </select>
                </div>
                <div className="form-group">
                    <label htmlFor="prices">Room Price ${price}</label>
                    <input type="range" name="price" id="price" value={price} step="10" min={minPrice} max={maxPrice} className="form-control" onChange={handleChange} />
                </div>
                <div className="form-group">
                    <label htmlFor="size">Room Size</label>
                    <div className="size-inputs">
                        <input type="number" name="minSize" id="size" value={minSize} className="size-input" onChange={handleChange} />
                        <input type="number" name="maxSize" id="maxsize" value={maxSize} className="size-input" onChange={handleChange} />
                    </div>
                </div>
                <div className="form-group">
                    <div className="single-extra">
                        <input type="checkbox" name="breakfast" id="breakfast" checked={breakfast} onChange={handleChange} />
                        <label htmlFor="breakfast">breakfast</label>
                    </div>
                    <div className="single-extra">
                        <input type="checkbox" name="pets" id="pets" checked={pets} onChange={handleChange} />
                        <label htmlFor="pets">pets</label>
                    </div>

                </div>
            </form>
        </section>
    );
}

export default RoomFilter;
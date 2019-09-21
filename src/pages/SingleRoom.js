import React, {Component} from 'react';
import defaultBcg from '../images/room-1.jpeg';
import Banner from '../components/Banner';
import {Link} from 'react-router-dom';
import {RoomContext} from "../context";
import StyledHero from '../components/StyledHero';

export default class SingleRoom extends Component {
    constructor(props) {
        super(props);
        this.state = {
            slug:this.props.match.params.slug,
            defaultBcg
        };
        //console.log(this.props);
    }
    static contextType = RoomContext;
    //componentDidMount() { in case you need a specific API call for this data}

    render() {
        const {getRoom} = this.context;
        const room = getRoom(this.state.slug);
        //console.log(room);
        if (!room){
            return (<div className="error">
                <h3>No such room could be found</h3>
                <Link to='/rooms' className="btn-primary">back to rooms</Link>
            </div>);
        }
        const {name,description,capacity,size,price,extras,breakfast,pets,images} = room;
        const [mainImg,...otherImages] = images;
        return (
            <>
                <StyledHero img={mainImg || this.state.defaultBcg}>
                    <Banner title={`${name} room`}>
                        <Link to='/rooms' className='btn-primary'>back to rooms</Link>
                    </Banner>
                </StyledHero>
                <section className="single-room">
                    <div className="single-room-images">
                        {otherImages.map((item,index) => {
                            return <img key={index} src={item} alt={name} />
                        })}
                    </div>
                    <div className="single-room-info">
                        <article className="desc">
                            <h3>details</h3>
                            <p>{description}</p>
                        </article>
                        <article className="info">
                            <h3>info</h3>
                            <h6>price: ${price}</h6>
                            <h6>size: {size} SQFT</h6>
                            <h6>Max Capacity: {capacity} {capacity > 1 ? "people" : "person"}</h6>
                            <h6>{pets ? "Pets Allowed" : "No Pets Allowed"}</h6>
                            <h6>{breakfast && "Free Breakfast Included"}</h6>
                        </article>
                    </div>
                    <div className="room-extras">
                        <h6>extras</h6>
                        <ul className="extras">
                            {extras.map((item,index) => {
                                return <li key={index}>- {item}</li>
                            })}
                        </ul>

                    </div>

                </section>
            </>
        );
    }
}
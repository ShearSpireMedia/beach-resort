import React, {Component} from 'react';
import {RoomContext} from '../context';
import Loading from '../components/Loading';
import Room from '../components/Room';
import Title from '../components/Title';

class FeaturedRooms extends Component {
    static contextType = RoomContext;

    render() {
        // const {name,greeting} = this.context;
        let {loading, featuredRooms:rooms} = this.context;
        rooms = rooms.map(room => {
           return <Room key={room.id} room={room} />
        });
        return (
            <section className="featured-rooms">
                <Title title="featured rooms" />
                <div className="featured-rooms-center">
                    {loading ? <Loading/> : rooms}
                </div>

            </section>
        );
    }
}

export default FeaturedRooms;
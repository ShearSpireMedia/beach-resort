import React, {Component} from 'react';
import Client from './Contentful';
import items from './data';

const useLocalData = false; // set this boolean as needed for local data or contentful.com data
const RoomContext = React.createContext();

class RoomProvider extends Component {
    state = {
        rooms:[],
        sortedRooms:[],
        featuredRooms:[],
        loading:true,
        type:'all',
        capacity:1,
        price:0,
        minPrice:0,
        maxPrice:0,
        minSize:0,
        maxSize:0,
        breakfast:false,
        pets:false
    };
    //getData on mount later when we get external data
    getData = async () => {

        try {
            let response,rooms;
            if (useLocalData){
                rooms = this.formatData(items);
            }else{
                response = await Client.getEntries({content_type:'beachResortRoom',order: 'fields.capacity,fields.type,fields.price'});
                rooms = this.formatData(response.items);
            }
            let featuredRooms = rooms.filter(room => room.featured === true);
            let prices = rooms.map(item => item.price);
            let sizes = rooms.map(item => item.size);
            let maxPrice = Math.max(...prices);
            let maxSize = Math.max(...sizes);
            //console.log(prices,maxPrice,sizes,maxSize);
            this.setState({
                rooms,
                featuredRooms,
                sortedRooms:rooms,
                loading:false,
                price:maxPrice,
                maxPrice,
                maxSize
            });
            //console.log(rooms);

        } catch (error){
            console.log(error);
        }
    };
    componentDidMount(){
        this.getData();
    }
    formatData(items){
        return items.map(item => {
            let id = item.sys.id;
            let images = item.fields.images.map(image => image.fields.file.url);
            return {...item.fields,images,id};
        });
    }
    getRoom = (slug) => {
        let tempRooms = [...this.state.rooms];
        return tempRooms.find((room) => room.slug === slug);
    };
    handleChange = event => {
        const target = event.target;
        const value = target.type === "checkbox" ? target.checked : target.value;
        const name = target.name;
        this.setState({
            [name]:value
        },this.filterRooms);
    };
    filterRooms = () =>{
        let {rooms,type,capacity,price,minSize,maxSize,breakfast,pets} = this.state;
        let tempRooms = [...rooms];
        capacity = parseInt(capacity);
        price = parseInt(price);
        if (type !== "all"){
            tempRooms = tempRooms.filter(room => room.type === type);
        }
        if (capacity !== 1){
            tempRooms = tempRooms.filter(room => room.capacity >= capacity);
        }
        tempRooms = tempRooms.filter(room => room.price <= price);
        tempRooms = tempRooms.filter(room => room.size >= minSize && room.size <= maxSize);
        if (breakfast){
            tempRooms = tempRooms.filter(room => room.breakfast === true);
        }
        if (pets){
            tempRooms = tempRooms.filter(room => room.pets === true);
        }
        this.setState({sortedRooms:tempRooms});
    };
    render() {
        return (
            <RoomContext.Provider value={
                {...this.state,
                    getRoom:this.getRoom,
                    handleChange:this.handleChange}
            }>
                {this.props.children}
            </RoomContext.Provider>
        );
    }
}

const RoomConsumer = RoomContext.Consumer;

export function withRoomConsumer(Component){
    return function ConsumerWrapper(props){
        return <RoomConsumer>
            {value => <Component {...props} context={value} />}
        </RoomConsumer>
    }
}

export {RoomProvider,RoomConsumer,RoomContext};
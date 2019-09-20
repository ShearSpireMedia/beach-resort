import React from 'react';
import RoomFilter from './RoomFilter';
import RoomList from './RoomList';
import {withRoomConsumer} from '../context';
import Loading from './Loading';

function RoomsContainer({context}){
    const {loading,sortedRooms,rooms} = context;
    if (loading){
        return <Loading />
    }
    console.log(context);
    return (
        <>
            <RoomFilter rooms={rooms} />
            <RoomList rooms={sortedRooms} />
        </>
        );
}

export default withRoomConsumer(RoomsContainer);

// This is how we use the RoomConsumer without using a higher order function in context.js
// import React from 'react';
// import RoomFilter from './RoomFilter';
// import RoomList from './RoomList';
// import {RoomConsumer} from '../context';
// import Loading from './Loading';
//
// function RoomsContainer() {
//     return (
//         <RoomConsumer>
//             {(value) => {
//                 const {loading,sortedRooms,rooms} = value;
//                 if (loading){
//                     return <Loading />
//                 }
//                 console.log(value);
//                 return (
//                     <div>
//                         hello from RoomsContainer
//                         <RoomFilter rooms={rooms} />
//                         <RoomList rooms={sortedRooms} />
//                     </div>
//                     );
//                 }
//             }
//         </RoomConsumer>
//     );
// }
//
// export default RoomsContainer;
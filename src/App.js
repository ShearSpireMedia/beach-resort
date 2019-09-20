import React from 'react';
import './App.css';
import Home from './pages/Home';
import Rooms from './pages/Rooms';
import SingleRoom from './pages/SingleRoom';
import Error from './pages/Error';
import Navbar from './components/Navbar';
import {Route, Switch} from 'react-router-dom';

function App() {
  return (
    <>
        <Navbar />
        <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/rooms/" component={Rooms} />
        <Route exact path="/rooms/:slug" component={SingleRoom} />
        <Route component={Error} />
        </Switch>
    </>
  );
}
/*
Tutorial at https://www.youtube.com/watch?v=LXJOvkVYQqA
9-13-2019
Left off at 25:30 in the video

9-15-2019
Left off at 1:49:09 in the video

9-16-2019
Left off at 2:31:22

9-17-2019
Left off at 3:26:29

9-18-2019
Left off at 4:32:02

for icons
https://react-icons.netlify.com/#/

to learn about styled components
https://www.styled-components.com
 */
export default App;

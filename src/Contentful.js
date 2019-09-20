import {createClient} from 'contentful';

export default createClient({
    space: process.env.REACT_APP_API_SPACE,
    accessToken: process.env.REACT_APP_ACCESS_TOKEN
});
//git remote add origin git@github.com:ShearSpireMedia/react-beach-resort.git
//
// const contentful = require('contentful')
//
// const client = contentful.createClient({
//     space: '<space_id>',
//     accessToken: '<content_delivery_api_key>'
// })
//
// client.getEntry('<entry_id>')
//     .then((entry) => console.log(entry))
//     .catch(console.error)
//
// //space id is 140sqbbwsgor
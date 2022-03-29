const  express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/F1_Proyect');

const Tracks = mongoose.model('Tracks', 
    {
    name: String, 
    url_bandera: String, 
    urlImageTrack: String, 
    city: String,
    length: String,
    turns: String,
});


router.post('/newtrack', async(request,response) => {
    const body = request.body;
    const newTracks = new Tracks();
    newTracks.name = body.name;
    newTracks.url_bandera = body.url_bandera;
    newTracks.urlImageTrack = body.urlImageTrack;
    newTracks.city = body.city;
    newTracks.length = body.length;
    newTracks.turns = body.turns;

    const result = await newTracks.save().then ((res) =>{
        return res;
    });
    response.json({result:result});
    console.log('New track was created');
});


module.exports = router;
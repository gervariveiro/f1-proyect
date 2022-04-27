const  express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

const user ='gerva141';
const password ='vVSwBJfRONSKMnja';
const dbname ='f1-proyect';

mongoose.connect(`mongodb+srv://${user}:${password}@cluster0.zxcji.mongodb.net/${dbname}?retryWrites=true&w=majority`);

//connect local : mongoose.connect('mongodb://localhost:27017/F1_Proyect');

//model tracks
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
    console.log('New track was added');
});

router.get('/gettracks', (req, res) => {
    Tracks
        .find()
        .then((data) => res.json(data))
});



module.exports = router;
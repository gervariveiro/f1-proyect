const  express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

const user ='gerva141';
const password ='vVSwBJfRONSKMnja';
const dbname ='f1-proyect';

mongoose.connect(`mongodb+srv://${user}:${password}@cluster0.zxcji.mongodb.net/${dbname}?retryWrites=true&w=majority`);

//connect local : mongoose.connect('mongodb://localhost:27017/F1_Proyect');

//model drivers

const Drivers = mongoose.model('Drivers', 
    {
    name: String,
    number:String,
    team: String, 
    url_bandera: String, 
    country: String,
    urlImageDriver: String, 
    age: String,
    worldchamp: String,
});


//new driver
router.post('/newdriver', async(request,response) => {
    const body = request.body;
    const newDrivers = new Drivers();
    newDrivers.name = body.name;
    newDrivers.number = body.number;
    newDrivers.team = body.team;
    newDrivers.url_bandera = body.url_bandera;
    newDrivers.urlImageDriver = body.urlImageDriver;
    newDrivers.country = body.country;
    newDrivers.age = body.age;
    newDrivers.worldchamp = body.worldchamp;

    const result = await newDrivers.save().then ((res) =>{
        return res;
    });
    response.json({result:result});
    console.log('New driver was added');
});

//get drivers
router.get('/getdrivers', (req, res) => {
    Drivers
        .find()
        .then((data) => res.json(data))
});


module.exports = router;
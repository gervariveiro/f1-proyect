const  express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

const user ='gerva141';
const password ='vVSwBJfRONSKMnja';
const dbname ='f1-proyect';

mongoose.connect(`mongodb+srv://${user}:${password}@cluster0.zxcji.mongodb.net/${dbname}?retryWrites=true&w=majority`);

//connect local : mongoose.connect('mongodb://localhost:27017/F1_Proyect');


//model Teams

const Teams = mongoose.model('Teams', 
    {
    name: String,
    drivers:String,
    urlImageTeam: String,
    urlImageCar: String,
    firstpart: String,
    constructorWorldchamps: String,
});


//new driver
router.post('/newteam', async(request,response) => {
    const body = request.body;
    const newTeams = new Teams();
    newTeams.name = body.name;
    newTeams.drivers = body.drivers;
    newTeams.urlImageTeam = body.urlImageTeam;
    newTeams.urlImageCar = body.urlImageCar;
    newTeams.firstpart = body.firstpart;
    newTeams.constructorWorldchamps = body.constructorWorldchamps;

    const result = await newTeams.save().then ((res) =>{
        return res;
    });
    response.json({result:result});
    console.log('New team was added');
});

//get drivers
router.get('/geteams', (req, res) => {
    Teams
        .find()
        .then((data) => res.json(data))
});


module.exports = router;
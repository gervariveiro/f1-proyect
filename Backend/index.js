const  express = require('express');
const app = express();
const cors = require('cors');
const path = require('path');
const bodyParser = require('body-parser');


//set
app.use(cors());
app.use(bodyParser.urlencoded(({extended: false})));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, "public")));


const port = process.env.PORT || 8080;

app.listen(port, () => {
    console.log('Server ON in Port 8080')
});

//rutas

const tracksRouters = require('./routes/tracks');


//rutas app.use

app.use('/tracks', tracksRouters);


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


const port = proces.env.PORT || 5000;

app.listen(port, () => {
    console.log('Server ON en Puerto 5000')
});


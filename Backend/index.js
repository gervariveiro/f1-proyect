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
const driversRouters = require('./routes/drivers');
const teamsRouters = require('./routes/teams');

//rutas app.use

app.use('/tracksdb', tracksRouters);
app.use('/driversdb', driversRouters);
app.use('/teamsdb', teamsRouters);


//nodemailer

app.post('/send-email', async (req, res) => {
    const { name, email, phone, message } = req.body;
    
    contentHTML = `
        <h1>User Information</h1>
        <ul>
            <li>Nombre: ${name}</li>
            <li>Email: ${email}</li>
            <li>Teléfono: ${phone}</li>
        </ul>
        <p>${message}</p>
    `;
  
    console.log(contentHTML);
  
    const transporter = nodemailer.createTransport({
        host: 'smtp.gmail.com',
        port: 465,
        secure: true,
        auth: {
            user: `gervasioriveiro@gmail.com`,
            pass: `mgmvehfoofdurvmx`
        },
        tls:{
            rejectUnauthorized: false
        }
    });
  
  /*transporter.sendMail({
        from: 'gervasioriveiro@gmail.com',
        to: 'gervasioriveiro@gmail.com',
        subject: 'Mail de prueba',
        text:'Esto es un  prueba'
    });*/
  
  const info = await transporter.sendMail({
        from: '"Server Gmail" <gervasioriveiro@gmail.com>',
        to: 'gervasioriveiro@gmail.com',
        subject: 'Contacto Nuevo Cliente',
        html: contentHTML
    })
  
   /* res.send('received');
  });*/
  
  console.log('Message sent', info.messageId);
  
  res.redirect('/success.html');
  
  });
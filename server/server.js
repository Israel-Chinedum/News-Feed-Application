import express from 'express';
import fs from 'fs';
import { home } from './get_requests/home_route.js';
import { reg } from './get_requests/reg_route.js';
import { images } from './get_requests/image_route.js';
import { login } from './get_requests/login_route.js';
import { password } from './get_requests/password_route.js';
import { register } from './post_requests/register_route.js';

const app = express();

app.use(express.urlencoded({extended: false}));

app.set('view engine', 'ejs');
app.use(express.static('./static'));


// GET REQUEST HANDLERS
home(app, fs);
reg(app);
images(app, fs);
login(app, fs);
password(app, fs);

// POST REQUEST HADLERS
register(app, fs);

app.get('/registration', (req, res) =>{
    res.render('registration_page');
})

app.listen(4000, 'localhost', ()=>{
 console.log('Now listening on port 4000');
});



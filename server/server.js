//----------IMPORT PACKAGES----------
import express from 'express';
import fs from 'fs';
import { home } from './get_requests/home_route.js';
import { reg } from './get_requests/reg_route.js';
import { images } from './get_requests/image_route.js';
import { login } from './get_requests/login_route.js';
import { password } from './get_requests/password_route.js';
import { register } from './post_requests/register_route.js';
import { blogs } from './get_requests/blogs_route.js';
import { blogContent } from './get_requests/blog_content.js';
import { Server } from 'socket.io';
import http from 'http';
import mongoose from 'mongoose';
import multer from 'multer';



//----------ESTABLISH MONGOOSE CONNECTION----------
mongoose.connect('mongodb://localhost:27017/News_Feed_Application').then(() => {
    console.log('Mongoose connected!');
});



//----------SET SCHEMA----------
const userSchema = mongoose.Schema({
    Data: Object,
    File: Object
});



//----------SET MODEL AND SELECT TABLE----------
const userModel = mongoose.model('students', userSchema);


//----------SETUP MULTER----------
const upload = multer({});



//----------STORE EXPRESS IN APP VARIABLE----------
const app = express();



//----------CONFIGURE SERVER TO ACCEPT URL DATA AND JSON DATA----------
app.use(express.urlencoded({extended: false}));
app.use(express.json());



//----------SETUP VIEW ENGINE----------
app.set('view engine', 'ejs');
app.use(express.static('./static'));



//----------GET REQUEST HANDLERS----------
home(app, fs);
reg(app);
images(app, fs);
login(app, fs);
password(app, fs);
blogs(app);
blogContent(app);



//----------POST REQUEST HADLERS----------
register(app, userModel, upload);



//----------CONVERT TO WEBSOCKET CONNECTION----------
const server = http.createServer(app);
const io = new Server(server);



//----------ESTABLISH SOCKET CONNECTION----------
io.on('connection', (socket) =>{
    console.log('new user connected!');
    io.emit('server', {message: 'this is a server message'});
});



//----------LISTEN FOR INCOMMING REQUESTS----------
server.listen(4000, ()=>{
 console.log('Now listening on port 4000');
});



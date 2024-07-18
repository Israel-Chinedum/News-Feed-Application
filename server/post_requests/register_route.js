export const register = ( app, fs ) =>{
    app.post('/register', (req, res)=>{
        console.log(req.body);
        res.send('You have successfully registered !');
    });
}
export const images = (app, fs) =>{
    app.get('/images', (req, res)=>{
        fs.readdir('./static/images', (err, data)=>{
            res.json(data);
        });
    });
}
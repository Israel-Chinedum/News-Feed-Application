export const password = (app, fs) =>{
    app.get('/password', (req, res)=>{
        res.render('password_page');
    });
}
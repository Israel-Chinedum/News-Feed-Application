export const login = (app, fs) =>{
    app.get('/login', (req, res)=>{
        res.render('login_page');
    });
}
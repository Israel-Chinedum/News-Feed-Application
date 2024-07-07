export const reg = (app) =>{

    app.get('/registration', (req, res) =>{
        res.render('registration_page');
    });

}
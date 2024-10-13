export const reg = (app) => {

    //----------registration route handler----------
        app.get('/registration', (req, res) =>{
            res.render('registration_page');
        });
    
    }
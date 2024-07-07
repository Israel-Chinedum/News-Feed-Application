export const home = (app, fs) =>{

    app.get('', (req, res) =>{
        res.render('home_page');
    });

}
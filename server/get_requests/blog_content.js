export const blogContent = (app) => {

    //SCHOOL_UPDATES ROUTE HANDLER
    app.get('/school_updates', (req, res) => {
        res.render('school_updates');
    });

    //SHORT VIDEOS ROUTE HANDLER
    app.get('/general_notice', (req, res) => {
        res.render('gen_notice');
    });

    //HEALTH ROUTE HANDLER
    app.get('/dept_notice', (req, res) => {
        res.render('health');
    });

    //ENTERTAINMENT ROUTE HANDLER
    app.get('/entertainment', (req, res) => {
        res.render('entertainment');
    });

    //FASHION ROUTE HANDLER
    app.get('/fashion', (req, res) => {
        res.render('fashion');
    });

    //POLITICS ROUTE HANDLER
    app.get('/politics', (req, res) => {
        res.render('politics');
    });

    //TECHNOLOGY ROUTE HANDLER
    app.get('/technology', (req, res) => {
        res.render('technology');
    });

    //SPORTS ROUTE HANDLER
    app.get('/sports', (req, res) => {
        res.render('sports');
    });

    //BUSINESS ROUTE HANDLER
    app.get('/business', (req, res) => {
        res.render('business');
    });

}
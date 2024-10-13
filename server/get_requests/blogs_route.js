export const blogs = (app) => {
    app.get('/blogs', (req, res) => {
        res.render('blogs');
    });
}
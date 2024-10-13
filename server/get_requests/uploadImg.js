export const uploadImg = (app) => {
    app.post('/uploadImg', (req, res) => {
        res.render('uploadImg');
    });
}
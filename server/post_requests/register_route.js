export const register = (app, userModel, upload) => {

    //----------valUser route handler----------
    app.post('/valUser', async (req, res) => {

        console.log(req.body);
        const reply = {};

        //----------VALIDATE USER BY CHECKING IF EMAIL ALREADY EXISTS----------
        await userModel.find({ "Data.Email": req.body['Email'] }).then(user => {
            console.log(user);
            if (user.length < 1) {
                reply['userExists'] = false;
            } else {
                reply['userExists'] = true;
            }
        });

        await userModel.find({ "Data.userName": req.body['userName'] }).then(user => {
            if (user.length < 1) {
                reply['nameTaken'] = false;
            } else {
                reply['nameTaken'] = true;
            }
        });

        res.json(reply);

    });


    //----------register route handler----------
    app.post('/register', async (req, res) => {
        console.log(req.body);

        await userModel.find({ "Data.Email": req.body['Email'] }).then(user => {
            if (user.length < 1) {

                userModel({
                    Data: req.body
                }).save();

            } else {
                //DO NOTHING!
                console.log('Im not gonna do anything!');
            }
        });

        res.render('uploadImg', { Email: req.body['Email'] });
    });


    //----------upload image route handler----------
    app.post('/uploadImg', upload.single('file'), async (req, res) => {
        console.log(req.body['Email']);
        await userModel.updateOne({ "Data.Email": req.body['Email'] }, {
            File: req.file
        });
        const src = `data:${req.file.mimetype};base64,${req.file.buffer.toString('base64')}`;
        res.json({ src });
    });
}
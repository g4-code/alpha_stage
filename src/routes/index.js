//routing

module.exports = function (app, alphaJson, top5Json) {

    //reg exp url
    app.get(/secret/, function (req, res, next) {
        //res.send('secret Poems section');
        //TODO: DAO Implement
        res.format({
            html: function () {
                res.send('<p>Secrtet Poems Directory : 𐤏𐤔𐤕𐤓𐤕 𐤌𐤋𐤊 </p>')
            }
        }),
            next(console.log("uh??"));
    })

    app.get(/top5.json/, async (req, res, next) => {
        console.log("Upcoming request from  http://localhost:3000/top5.json");
        //TODO: DAO Implement
        console.log(top5Json);
        res.json(top5Json);
        next(console.log("Express says: bye!"));
    })

    app.get(/alpha.json/, async (req, res, next) => {
        console.log("Upcoming request from http://localhost:3000/alpha.json");
        //TODO: DAO Implement
        console.log(alphaJson);
        res.json(alphaJson);
        next(console.log("Express says: bye!"));
    })

    app.route('/vote/:meaning')
        .get(function (req, res) {
            res.send('Get some data from...');
        })
        .post(function (req, res) {
            res.send('Add a vote' + req.params.id + "respond to client");
        })
        .put(async (req, res) => {
            console.log("Web client from UI");
            res.send('write op...')
            console.log("put_" + req.params.meaning);
            //ObjectID instead...
            console.log(typeof req.params.meaning);
            console.log(req.params.meaning);
            // 2 symbol array workaround
            let stringLook = req.params.meaning;
            let stringLookFlag = req.params.meaning;
            let string_id_back = stringLookFlag.includes(",");

            let id = req.params.meaning;
            if (string_id_back) {
                let myArrayId = stringLook.split(",");
                //console.log("..." + typeof myArrayId);
                id = myArrayId;
            }

            try {
                //TODO: DAO Implement
                /*
                const collection = db.collection("phoenician_alphabet");
                const backendprocess_result = await collection.updateOne(
                    { meaning: id },
                    { $inc: { fav_votes: 1 } }
                );
                //console.log(backendprocess_result);
                console.log("Write op success:_" + id);
                */

            } catch (err) {
                console.error(err.stack)
            }
        })
}
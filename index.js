const express = require('express');
const app = express();
const weather = require('openweather-apis');
const appKey = "e1f8f5838e58896a754b19092a6c075e";
const port = process.env.PORT || 443;

weather.setLang('en');
weather.setAPPID(appKey);

app.set('view engine', 'ejs');
app.use(express.static("views"))

app.get('/', (req, res) => {
    res.render('index');
})

app.get('/getWeather', (req, res) => {
    const city = req.query.city;

    if (!city) {
        return res.send({
            error: "City not specified :("
        });
    }
    // const city = req.url.substring(1, );
    weather.setCity(city);

    weather.getSmartJSON((err, {
        temp,
        description,
        pressure,
        humidity
    }) => {
        if (err) {
            res.end({
                err
            });
        }
        res.send({
            city,
            temp,
            description,
            pressure,
            humidity
        })
    })
});
app.use((req, res) => {
    res.send("Oops :(");
})

app.listen(port, () => {
    console.log(`Server running at ${port}`);
})

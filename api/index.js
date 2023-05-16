import express from 'express';
import bodyparser from 'body-parser';
import connection from './config/db.js';
import activityRoute from './controller/activity.js';

const app = express();
const port = process.env.PORT || 3000;
connection();

app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: false }));
app.use('/activity', activityRoute)

app.use((req, res) => {
    res.status(404).send({
        error: 404
    })
});


app.listen( port, () =>
    console.log( `API listening on port ${port}!` )
);
    
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const { PORT } = require('./config/serverConfig');

// const { sendBasicEmail } = require('./services/email-service');
// const  cron = require('node-cron');

const setupAndStartServer = () => {
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended: true}));

    app.listen(PORT,() => {
        console.log(`Server Started at PORT ${PORT}`);

        // cron.schedule('*/1 * * * *',() => {
        //     console.log('Running a task every minute');
        // })

        // sendBasicEmail('support@admin.com',
        // 'remainderservice6@gmail.com',
        // 'this is a testing mail',
        // 'Hey, how are you?I hope you like the code');
    });
}

setupAndStartServer();
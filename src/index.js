const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const { PORT } = require('./config/serverConfig');

const TicketController = require('./controllers/ticket-controller');
// const { sendBasicEmail } = require('./services/email-service');
// const  cron = require('node-cron');

const jobs = require('./utils/job');

const setupAndStartServer = () => {
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended: true}));

    app.post('/api/v1/ticket',TicketController.create);

    app.listen(PORT,() => {
        console.log(`Server Started at PORT ${PORT}`);


        jobs();
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
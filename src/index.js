const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const { PORT, REMAINDER_BINDING_KEY } = require('./config/serverConfig');

const TicketController = require('./controllers/ticket-controller');
const { subscribeMessage,createChannel } = require('./utils/messageQueue');
const EmailService = require('./services/email-service');

const jobs = require('./utils/job');

const setupAndStartServer = async () => {
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({extended: true}));

    app.post('/api/v1/ticket',TicketController.create);

    const channel = await createChannel();
    subscribeMessage(channel,EmailService.testingQueue,REMAINDER_BINDING_KEY);

    app.listen(PORT,() => {
        console.log(`Server Started at PORT ${PORT}`);
        jobs();
        
    });
}

setupAndStartServer();
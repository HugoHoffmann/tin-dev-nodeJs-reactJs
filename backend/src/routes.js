const express = require('express');
const DevController = require('./controllers/DevController');
const LikeController = ('./controllers/LikeController');
const DislikeController = ('./controllers/DislikeController');

const routes = express.Router();

routes.get('/', (req, res) => {
    return res.json({ ok: true });
})
routes.post('/devs', DevController.store);
routes.post('/devs/:devId/likes', LikeController.store);

routes.post('/devs/:devId/dislikes', DislikeController.store);

module.exports = routes;
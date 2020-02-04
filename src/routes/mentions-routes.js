const express = require('express');
const router = express.Router();
const mentionsController = require('../controllers/mentions-controller');


// router.get('/api', (req, res, next) => {
//     res.status(200).send({
//       title: 'MentionsAPI',
//       version: '1.0.0'
//     });
//   });


// como foi declarado vc deve usar esse caminho app.use('/mentions', mentionsRoutes);
// localhost:3000/mentions/api   
router.get('/api', mentionsController.listMentions);
router.post('/api', mentionsController.createMention);

module.exports = router;

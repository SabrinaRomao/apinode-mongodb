const express = require('express');
const router = express.Router();
const mentionsController = require('../controllers/mentions-controller');





// como foi declarado vc deve usar esse caminho app.use('/mentions', mentionsRoutes);
// localhost:3000/mentions/api   
router.get('/api', mentionsController.listMentions);


/* Qual a diferenca na chamada GET e POST para o app modulo do express */
router.post('/api', mentionsController.createMention);
/* https://expressjs.com/en/resources/middleware/body-parser.html
   https://stackoverflow.com/questions/5710358/how-to-retrieve-post-query-parameters
 */
module.exports = router;

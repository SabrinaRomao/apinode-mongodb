const mongoose = require('mongoose');
const Mentions = mongoose.model('Mentions');

// list
exports.listMentions = async (req, res) => {
  console.log("##### aquii listando #####")
  try {
    const data = await Mentions.find({});
    console.log("##### aquii listando OK #####")
    console.log("##### GET #####")
    console.log("##### aquii listando OK #####")
    res.status(200).send(data);
  } catch (e) {
    console.log("##### aquii listando ERRO #####")
   
    res.status(500).send({
         message: 'Falha ao carregar as menções.'
    });
  }
};

// create
exports.createMention = async (req, res) => {
  try {
    const mention = new Mentions({
      friend: req.body.friend,
      mention: req.body.mention
    });

    console.log(mention)

    await mention.save();
    console.log("##### aquii CRIANDO OK #####")
    console.log("##### POST #####")
    console.log("##### aquii CRIANDO OK #####")
    res.status(201).send({
      message: 'Menção cadastrada com sucesso!'
    });
  } catch (e) {
    console.log("##### aquii ERRO POST OK #####")
    res.status(500).send({
      message: 'Falha ao cadastrar a menção.'
    });
  }
};


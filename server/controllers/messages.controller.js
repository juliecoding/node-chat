const messages = []
let id = 0

module.exports = {
  create: (req, res) => {
    const {text, time} = req.body
    messages.push({id, text, time});
    id++;
    res.status(200).send(messages);
  },

  read: (req, res) => {
    res.status(200).send(messages);
  },

  update: (req, res) => {
    for (var i = 0; i < messages.length; i++) {
      if (messages[i].id == req.params.id) {
        messages[i].text = req.body.text
      }
    }
    res.status(200).send(messages);
  },

  delete: (req, res) => {
    for (var i = 0; i < messages.length; i++) {
      if (messages[i].id == req.params.id) {
        messages.splice(i, 1);
      }
    }
  }
}

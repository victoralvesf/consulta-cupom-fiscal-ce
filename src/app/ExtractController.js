const instance = require('../api')

class ExtractController {
  async index(req, res) {
    const { cfeKey } = req.params
    const regex = /^[0-9]{44}$/;

    if(!regex.test(cfeKey)) {
      return res.status(400).json({
        status: false,
        field: 'cfeKey',
        response: 'A chave de acesso precisa ter 44 caracteres numéricos.'
      })
    }

    await instance.get(`/${cfeKey}`)
      .then(function (response) {
        return res.json(response.data)
      })
      .catch(function (error) {
        return res.status(500).json({
          status: false,
          response: `Não foi possível realizar a consulta. Tente novamente mais tarde.`
        })
      })
  }
}

module.exports = new ExtractController()
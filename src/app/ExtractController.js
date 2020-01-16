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

    await instance.get(`/${cfeKey}`, {
      headers: {
        'connection': 'keep-alive',
        "accept": "application/json, text/plain, */*",
        "origin": "http://cfe.sefaz.ce.gov.br",
        "user-agent": "Mozilla/5.0 (Macintosh; Intel Mac OS X 10_14_5) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/79.0.3945.117 Safari/537.36",
        "sec-fetch-site": "cross-site",
        "sec-fetch-mode": "cors",
        "referer": "http://cfe.sefaz.ce.gov.br/mfe/servicos",
        "accept-encoding": "gzip, deflate, br",
        "accept-language": "pt-BR,pt;q=0.9,en-US;q=0.8,en;q=0.7,zh-CN;q=0.6,zh;q=0.5,de;q=0.4"
      }
    })
    .then(function (response) {
      return res.json(response.data)
    })
    .catch(function (error) {
      return res.status(500).json(error)
    })
  }
}

module.exports = new ExtractController()
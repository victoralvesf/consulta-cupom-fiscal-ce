const axios = require('axios').default
const https = require('https')

const baseURL = 'https://cfe.sefaz.ce.gov.br:8443/portalcfews/mfe/fiscal-coupons/extract'

const instance = axios.create({
  baseURL,
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
  },
  httpsAgent: new https.Agent({
    rejectUnauthorized: false
  })
})

module.exports = instance
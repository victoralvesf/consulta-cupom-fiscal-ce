const axios = require('axios').default
const https = require('https')

const baseURL = 'https://cfe.sefaz.ce.gov.br:8443/portalcfews/mfe/fiscal-coupons/extract'

const instance = axios.create({
  baseURL,
  httpsAgent: new https.Agent({
    rejectUnauthorized: false
  })
})

module.exports = instance
### Instalar as dependência

```npm install``` ou ```yarn install```

### Iniciar

**Necessário que a porta 3333 esteja disponível para uso.**

```npm run dev``` ou ```yarn dev``` para iniciar um servidor local com hot reload

```npm run prod``` ou ```yarn prod``` para iniciar o script em ambiente de produção.

### Rota

**A rota padrão é:**

```/extract/{cfeKey}```

Onde *{cfeKey}* é a chave de acesso do cupom fiscal

**Exemplo de retorno:**

```json
{
  "status": {
    "code": 0
  },
  "coupon": {
    "cfeKey": "23190507185025000156592301066330037130698842",
    "mfe": {
      "serialNumber": "230106633"
    },
    "customer": {
      
    },
    "taxIdNumber": "7185025000156",
    "stateRegistration": "000067015190",
    "extractNumber": 3713,
    "costumerTaxIdNumber": "73323454391",
    "costumerTaxIdNumberFormatted": "733.234.543-91",
    "taxpayerObservation": "",
    "companyName": "M GORETE VASCONCELOS ME",
    "fantasyName": "INACIO AUTO PECAS",
    "address": {
      "street": "AV A (CJ. CEARA)",
      "number": "00784",
      "complement": "1 ETAPA",
      "neighborhood": "CONJUNTO CEARA",
      "zipCode": "60533590",
      "city": {
        "name": "FORTALEZA"
      }
    },
    "items": [
      {
        "item": 1,
        "code": "17941",
        "codeTraffic": "17941",
        "description": "SPRAY/LIMPA/ACD CARRO 200ml LIMPA/AR CONDICIONADO GRANADA",
        "amount": 1,
        "price": 10.85,
        "un": "UND",
        "valueOfTaxes": 1.17,
        "register": {
          "addition": 0,
          "additionApportionment": 0,
          "discount": 1.06,
          "discountApportionment": 0
        }
      },
      {
        "item": 2,
        "code": "16436",
        "codeTraffic": "16436",
        "description": "FILTRO/CABINE ACD GM CSA 94/01",
        "amount": 1,
        "price": 9.7,
        "un": "UND",
        "valueOfTaxes": 1.05,
        "register": {
          "addition": 0,
          "additionApportionment": 0,
          "discount": 0.95,
          "discountApportionment": 0
        }
      },
      {
        "item": 3,
        "code": "85",
        "codeTraffic": "85",
        "description": "GUARN/MALA VW GOL 95/,ESC 97 CSA/CEL/VEC",
        "amount": 1,
        "price": 51.5,
        "un": "UND",
        "valueOfTaxes": 5.58,
        "register": {
          "addition": 0,
          "additionApportionment": 0,
          "discount": 5.04,
          "discountApportionment": 0
        }
      }
    ],
    "payments": [
      {
        "method": "Dinheiro",
        "value": 65
      }
    ],
    "subTotal": 65,
    "discount": 0,
    "increase": 0,
    "emissionDate": "20/05/2019 10:22:23",
    "barcode": "23190507185025000156592301066330037130698842",
    "qrCode": "23190507185025000156592301066330037130698842|20190520102223|65,00|73323454391|KChEttauRTN3nQHWrjKx/ETBKruxPw2u0WN16zy/teNbcGIk31M1kgKX1SWJ+5TR6pj+Qhrs+nQLHFtPxzj90almzIu2t6KMcVaaH8JudhwXhjoC0IMbu51jhRaIgJQoJTDCZtxBFbZN0vPqlZdaQI8t9GZh883cRCwgA47tMTw5+pEzkGnzYrorYC/Ipxp6kcOBUOUuh7tLJZdijWOgOIt//o2KDfPsfoFmtmMjeyg35NUETadEJPwx7G6AjWy2HUy85LENa8BJCN9+zXDSdj08VmPm5GhS/Ux8GYHZa2s24T+gaIKoAaGuoHezOJt7VWxxjUCW072IuSVsLNN1jg==",
    "logoURL": "",
    "satNumber": "230106633",
    "totalTaxes": 7.8,
    "total": {
      "gross": 72.05,
      "totalDiscountAddition": -7.05,
      "subtotalDiscount": 0,
      "subtotalAddition": 0,
      "total": 65
    },
    "couponType": "SALE_COUPON",
    "saleCanceled": false,
    "cancellationCouponData": {
      
    },
    "paymentMethod": "Dinheiro",
    "paymentValue": 65,
    "paymentChange": 0,
    "obsFiscoList": [
      
    ]
  }
}
```

### Observaçōes

**Só é possível retornar informaçōes de cupons fiscais gerados no estado do Ceará**
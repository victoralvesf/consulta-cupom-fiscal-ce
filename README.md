### Instalar as dependências

```npm install``` ou ```yarn install```

### Iniciar

**Necessário que a porta 3333 esteja disponível para uso.**

```npm run dev``` ou ```yarn dev``` para iniciar um servidor local com hot reload

```npm run prod``` ou ```yarn prod``` para iniciar o script em ambiente de produção.

### Rota

**A rota padrão é:**

```http://localhost:3333/extract/{cfeKey}```

Onde *{cfeKey}* é a chave de acesso do cupom fiscal

**Exemplo de retorno:**

```json
{
  "status": {
    "code": 0
  },
  "coupon": {
    "cfeKey": "23171129045055000108592300096490000027956052",
    "mfe": {
      "serialNumber": "230009649"
    },
    "customer": {
      
    },
    "taxIdNumber": "29045055000108",
    "stateRegistration": "067374344",
    "extractNumber": 2,
    "costumerTaxIdNumber": "",
    "costumerTaxIdNumberFormatted": "",
    "taxpayerObservation": "Controle : 00000003                  Operador: PROGRAMADOR;Caixa: 002;",
    "companyName": "VAREJAO SUPER BARATO LTDA ME",
    "fantasyName": "VAREJAO SUPER BARATO",
    "address": {
      "street": "RUA ANTONIO FELICIANO DE CARVALHO",
      "number": "00016",
      "neighborhood": "CENTRO",
      "zipCode": "62300000",
      "city": {
        "name": "VICOSA DO CEARA"
      }
    },
    "items": [
      {
        "item": 1,
        "code": "3980",
        "codeTraffic": "3980",
        "description": "SABONETE PHEBO ODOR ROSA 90G CLASSICO",
        "amount": 1,
        "price": 2.59,
        "un": "UN",
        "valueOfTaxes": 0.87,
        "register": {
          "addition": 0,
          "additionApportionment": 0,
          "discount": 0,
          "discountApportionment": 0
        }
      }
    ],
    "payments": [
      {
        "method": "Dinheiro",
        "value": 6
      }
    ],
    "subTotal": 2.59,
    "discount": 0,
    "increase": 0,
    "emissionDate": "30/11/2017 17:56:02",
    "barcode": "23171129045055000108592300096490000027956052",
    "qrCode": "23171129045055000108592300096490000027956052|20171130175602|2,59||rBkqUbIR69tiVrwxRP8alTlWjNvN1n0Yt+r5z641hHoq2I2qXpXD/b+hBf4JNf8ijHk+Adh75biyRERMadlnFOvwy3W7qxvfLDB0UyYWw6cRBCbqKkesKjulrsWdq+QkckBedSEp2r8AioOBjNF11HBf3j4l4fgfUaS3xixSubWGFtvA8nU8YHxI68fJ7XtuTJQExDVnkPDv3s8bIh8mvv7qyRRMvVuFfU0JTsV1Gy+JnYT6KpkebNh4+M873JZf9DxC50BYoeA7lQ9U6cCoAne6TuOMGSniJcIZDMaI1J422d4RvR+HwtFvr1jL84r24dorFrg8B+TIrqR4nS3bkw==",
    "logoURL": "",
    "satNumber": "230009649",
    "totalTaxes": 0.87,
    "total": {
      "gross": 2.59,
      "totalDiscountAddition": 0,
      "subtotalDiscount": 0,
      "subtotalAddition": 0,
      "total": 2.59
    },
    "couponType": "SALE_COUPON",
    "saleCanceled": true,
    "cancellationCouponData": {
      
    },
    "paymentMethod": "Dinheiro",
    "paymentValue": 6,
    "paymentChange": 3.41,
    "obsFiscoList": [
      
    ]
  }
}
```

### Observaçōes

**Só é possível retornar informaçōes de cupons fiscais gerados no estado do Ceará**

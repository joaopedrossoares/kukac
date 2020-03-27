# kukac
Processo Seletivo Kukac Back-End
Para a realização do processo seletivo usei o framework ExpressJS. 

# Configuração do projeto:
- sudo apt install yarn 
- sudo apt install node-typescript
- npm install nodemon
- npm install express @types/express --save-dev
- npm install axios
- npm install

# Utilização da API:
### Para acessar os endpoints é necessário que use alguma ferramenta para realizar as requisições.
### Eu recomendo o POSTMAN.
#### É importante salientar que a estrutura do meu projeto está organizada da seguinte maneira:
#### Um endpoint para cada questão realizando o que é pedido.
#### Em caso de erro em alguma parte do código, favor entrar em contato para que possa ser corrigido se necessário.

##### Questão 1: 
- Método: GET -> endpoint: /isPalindrome/
-- Parâmetros *min* (inteiro) e *max* (inteiro)

#### Questão 2: 
- Método: GET -> endpoint: /purchaseChange/
-- Parâmetros *productPrice* (inteiro) e *money* (inteiro)
  
#### Questão 3: 
- Método: POST -> endpoint: /vehicle/ 
-- Parâmetros (Passado no corpo da requisição) -> 
```
{
        "model": "modelo" (carro ou moto),
        "yearFactoring": "ano",
        "quantityCarDoor": 4,
        "description": {}
}
```

#### Questão 4:
- Método: GET -> endpoint: /zipcode/
-- Parâmetros: 
-- *zipcode1* (inteiro de 8 dígitos) <br>
-- *zipcode2* (inteiro de 8 dígitos) <br>
-- *zipcode3* (inteiro de 8 dígitos) <br>
-- *zipcode3* (inteiro de 8 dígitos) <br>
-- *zipcode5* (inteiro de 8 dígitos) <br>





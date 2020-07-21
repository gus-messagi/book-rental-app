## Book Rental App

Este projeto possui uma fake api utilizando a lib [json-server](https://github.com/typicode/json-server).  
Para rodar a API digite na linha de comando:  
```yarn server```

## Auth

No arquivo ```json.server``` há duas contas cadastradas:  
```
{
    email: admin@admin.com
    password: 123456
}  

{
    email: client@client.com
    password: 123456
}
```
Todo cadastro de novo usuário é automaticamente feito como um cliente, porém, basta trocar no arquivo ```json.server``` o atributo ```type``` de ```client``` para ```admin```, caso deseje um admin. Porém, toda vez que alterar diretamente no arquivo, o servidor json precisa ser reiniciado.
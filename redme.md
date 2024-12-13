#### Criando api rapido

* nodejs
```
npm init -y
```

```
npm install json-server
```

#### base pra rodar

* criar um arquivo banco.json
 ```
{
    "produto": [
        {
            "id": 1,
            "nome": "notebook",
            "quantidade": 10
        }
    ]
}
 ```

#### rodar o projeto

```
npx json-server banco.json
```

#### api precisa
* get listar
* put atualizar
* delete deletar
* post inserir

#### passo a passo git

git init

git add .

copia e colar url do git
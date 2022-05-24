# Criar enquete

> ## Caso de sucesso
1. ⛔️ Recebe uma requisição do tipo **POST** na rota **api/surveys**
1. ⛔️ Valida se a requisição foi feita por um admin
2. ⛔️ Valida dados obrigatórios **question** e **answers**
3. ⛔️ Cria uma enquete com os dados fornecidos
4. ⛔️ Retorna 200 com os dados da enquete
5. ⛔️ Retorna 204

> ## Exceções
1. ⛔️ Retorna erro 404 se a API não existir
2. ⛔️ Retorna erro 403 se o usuário não for admin
3. ⛔️ Retorna erro 400 se **question** ou **answers** não forem fornecidos pelo client
4. ⛔️ Retorna erro 400 se **question** ou **answers** não forem fornecidos pelo client
5. ⛔️ Retorna erro 500 se der erro ao tentar criar a enquete
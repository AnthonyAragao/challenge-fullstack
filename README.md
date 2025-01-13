# Challenge Fullstack

## Como Rodar o Projeto

1. **Clone o repositório:**
    ```bash
        git clone https://github.com/AnthonyAragao/challenge-fullstack
        cd challenge-fullstack
    ```

2. **Instale as dependências:**
    ```bash
        composer i
        npm install
    ```

3. **Configure o banco de dados:**
    - Crie um banco de dados no seu SGBD.
    - Configure as credenciais do banco de dados no arquivo `.env`.
    - Rode o comando para subir a chave

    ```bash
        php artisan key:generate
    ```

4. **Execute as migrações e as seeders:**
    ```bash
    php artisan migrate --seed
    ```

5. **Inicie o servidor:**
    - **php artisan serve:** Inicia um servidor de desenvolvimento embutido no Laravel.
    - **npm run dev:** Compila e agrupar arquivos JavaScript e CSS para desenvolvimento.
    ```bash
        php artisan serve
        npm run dev
    ```

## Autenticação com Usuário Seeder

1. **Usuário Seeder:**
    - O seeder cria um usuário padrão com as seguintes credenciais:
      - **Email:** `test@example.com`
      - **Senha:** `123456789`

2. **Realize a autenticação:**
    - Para executar alguns métodos será necessário realizar autenticação
    - Efetue o login com as credenciais anteriores

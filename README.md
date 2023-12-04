# ![Logo polygon](public/polygon.png)  Food Explorer

Neste projeto foi desenvolvido o Food Explorer, que é um menu interativo para um restaurante. O projeto foi proposto pela rocketseat no curso do explorer, como projeto final da conclusão do curso.

O uso desse programa será separado por dois tipos de usuário, o cliente,  que poderá realizar pedidos e navegar entre as opções disponíveis no cardápio, e o admin, responsável por criar pratos e inclui-los no cardápio além de poder realizar a edição dos mesmos.

Todas as página deste projeto foram desenvolvidas pensando no método de mobile-first.

Para começar, temos a tela de login e de sign up, para a criação de conta. O padrão para criação de conta é criar um usuário do tipo cliente, para testar a funcionalidade precisa entrar com uma conta admin pré definida, nesse caso com o email admin@email.com e a senha admin.

Login desktop
![Login](image.png)   

Login mobile
![mobile](image-1.png)

Após efetuar o login nos deparamos com a página inicial do nosso projeto. Observem as diferenças no layout em relação ao tipo de usuário cadastrado.

Home admin
![admin](image-4.png) 

Home client
![User home](image-3.png)

Home mobile
![mobile](image-5.png) 

Na página inicial, o usuário que estiver em versão mobile terá a opção de um menu lateral com as opções de pesquisa, logout e criação de pratos no caso de um usuário admin. Na versão desktop esse conteúdo está acessivel diretamente no header da aplicação.

Menu lateral
![Menu](image-7.png)

Ao clicar em algum prato, o usuário será redirecionado para uma página com a versão detalhada e completa do prato.

Detalhes
![Alt text](image-8.png)

O página de criação e edição de pratos para o admin tem a seguinte estrutura:

Add
![Alt text](image-10.png)

Aqui é possível selecionar uma imagem para o prato, criar nome, definir em qual categoria o alimento se enquadra, definir os ingredientes, o preço e criar uma descrição do prato.

Abaixo voce encontra o link do deploy do site desta aplicação onde pode também realizar alguns testes.
Como são utilizadas ferramentas gratuitas para a publicação, pode ser observada alguma instabilidade ao acessar o link, sendo necessário esperar alguns minutinhos para conseguir efetuar o login.
# desafio_final_foodexplorer_frontend

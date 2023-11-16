import { Container, Form, Links  } from "./styles";

import { Button } from "../../components/Button";
import { Input } from "../../components/Input";

export function SignUp() {
    return (
        <Container>
            <Form>

                <div id="top">
                    <img src="/src/assets/polygon.png" alt="blue polygon" />
                    <h1>food explorer</h1>                    
                </div>

                <div id="signup">
                    <header>
                        <h1>Crie sua conta</h1>
                    </header>
                    <h2>Seu nome</h2>
                    <Input placeholder="Exemplo: Maria da Silva" />

                    <h2>Email</h2>
                    <Input placeholder="Exemplo: exemplo@exemplo.com.br" />
                    
                    <h2>Senha</h2>
                    <Input placeholder="No mínimo 6 caracteres" />

                    <Button title="Entrar" />

                    <Links>
                        Criar uma conta
                    </Links>
                </div>


            </Form>
        </Container>
    )
}
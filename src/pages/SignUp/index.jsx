import { Container, Form, Links  } from "./styles";

import { Button } from "../../components/Button";
import { Input } from "../../components/Input";

export function SignUp() {
    return (
        <Container>
            <Form>

                <div id="signin">
                    <img src="../../assets/polygon.png" alt="blue polygon" />
                    <h1>food explorer</h1>                    
                </div>

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


            </Form>
        </Container>
    )
}
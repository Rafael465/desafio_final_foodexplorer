import { Container, Form } from "./styles";
import { Link } from 'react-router-dom';

import { Button } from "../../components/Button";
import { Input } from "../../components/Input";

export function SignIn() {
    return (
        <Container>
            <Form>

                <div id="top">
                    <img src="/src/assets/polygon.png" alt="blue polygon" />
                    <h1>food explorer</h1>                    
                </div>

                <div id="signin">
                    <header>
                        <h1>Faça login</h1>
                    </header>
                    <h2>Email</h2>

                    <Input 
                    placeholder="Exemplo: exemplo@exemplo.com.br"
                    type="text"
                     />

                    <h2>Senha</h2>

                    <Input 
                    placeholder="No mínimo 6 caracteres"
                    type="password" 
                    />

                    <Button title="Entrar" />

                    <Link id="create" to="/register">
                        Criar uma conta
                    </Link>                    
                </div>


            </Form>
        </Container>
    )
}
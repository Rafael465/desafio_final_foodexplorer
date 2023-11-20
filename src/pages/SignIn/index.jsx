import { useState } from "react";
import { Container, Form } from "./styles";
import { Link } from 'react-router-dom';

import { useAuth } from '../../hooks/auth';

import { Button } from "../../components/Button";
import { Input } from "../../components/Input";

export function SignIn() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const { signIn } = useAuth();

    function handleSignIn(){
       signIn({ email, password });

    }

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
                    onChange={e => setEmail(e.target.value)}
                     />

                    <h2>Senha</h2>

                    <Input 
                    placeholder="No mínimo 6 caracteres"
                    type="password" 
                    onChange={e => setPassword(e.target.value)}
                    />

                    <Button title="Entrar" onClick={handleSignIn} />

                    <Link id="create" to="/register">
                        Criar uma conta
                    </Link>                    
                </div>


            </Form>
        </Container>
    )
}
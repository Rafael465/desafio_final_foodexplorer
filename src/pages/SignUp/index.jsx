import { useState } from "react";
import { Container, Form } from "./styles";
import { Link, useNavigate } from 'react-router-dom';

import { api } from "../../services/api";

import { Input } from "../../components/Input";
import { Button } from "../../components/Button";

export function SignUp() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const navigate = useNavigate();

    function handleSignUp(){
        if(!name || !email || !password) {
            return alert("Preencha todos os campos!");
        }

        api.post("/users", { name, email, password })
            .then(() => {
                alert("Usuário cadastrado com sucesso!");
                navigate("/");
        })
        .catch(error => {
            if (error.response){
                alert(error.response.data.message);
            } else {
                alert("Não foi possível cadastrar!");
            }
        });

    }

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

                    <Input 
                        placeholder="Exemplo: Maria da Silva" 
                        type="text"
                        onChange={e => setName(e.target.value)}
                    />

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

                    <Button title="Cadastrar" onClick={handleSignUp} />

                    <Link id="login" to="/">
                        Já tenho uma conta
                    </Link>
                </div>
            </Form>
        </Container>
    )
}
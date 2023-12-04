import { useState } from "react";
import { Container, Form, Content } from "./styles";
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
                <div id="brand">
                    <img src="/polygon.png" alt="blue polygon" />
                    <h1>food explorer</h1>                    
                </div>

                <Content>
                    <header>
                        <h1>Crie sua conta</h1>
                    </header>

                    <div id="in">
                        <Input
                            title="Seu nome"
                            placeholder="Exemplo: Maria da Silva" 
                            type="text"
                            onChange={e => setName(e.target.value)}
                        />

                        <Input
                            id="email"
                            title="E-mail"
                            placeholder="Exemplo: exemplo@exemplo.com.br" 
                            type="text"
                            onChange={e => setEmail(e.target.value)}
                        />
                        
                        <Input
                            title="Senha"
                            placeholder="No mínimo 6 caracteres" 
                            type="password"
                            onChange={e => setPassword(e.target.value)}
                        />
                    </div>

                    <Button title="Cadastrar" onClick={handleSignUp} />

                    <Link id="login" to="/">
                        Já tenho uma conta
                    </Link>
                </Content>
            </Form>
        </Container>
    )
}
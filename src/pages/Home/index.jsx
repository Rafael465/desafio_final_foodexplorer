import { Container, Form  } from "./styles";

import { Header } from "../../components/Header";
import { Input } from "../../components/Input";

export function Home() {
    return (
        <Container>

            <Header/>
            
            <Form>

                <div id="top">
                    <img src="/src/assets/pngegg2.png" alt="blue polygon" />
                </div>

                <div id="signin">
                    <header>
                        <h1>Sabores ingualáveis</h1>
                        <p>Sinta o cuidado do preparo com ingredientes selecionados.</p>
                    </header>
                    
                  
                </div>


            </Form>
        </Container>
    )
}
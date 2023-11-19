import { Container, Form, Menu  } from "./styles";


import { Header } from "../../components/Header";
import { Card } from "../../components/Card";
import { Footer } from "../../components/Footer";

export function Home() {
    return (
        <Container>

            <Header/>
            
            <Form>
                <div id="top">
                    <img src="/src/assets/pngegg2.png" alt="blue polygon" />
                    
                    <div>
                        <h1>Sabores inigualáveis</h1>
                        <p>Sinta o cuidado do preparo com ingredientes selecionados.</p>
                    </div>
                </div>

                             
            </Form>

            <h1>Refeições</h1>
            
            <Card />


            <Menu>                
            </Menu>

            <Footer />


        </Container>
    )
}
import { Container, Form, Menu, Content  } from "./styles";


import { Header } from "../../components/Header";
import { Section } from "../../components/Section";
import { Note } from "../../components/Note";
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

            <Menu>
                <h1>Refeições</h1>

                <div id="refeições">
                    <Card className="card" />
                </div>

                <h1>Pratos Principais</h1>

                <div id="principais">
                    <Card className="card" />
                </div>

                <h1>Bebidas</h1>

                <div id="bebidas">
                    <Card className="card" />
                </div>


            </Menu>
            <Content>
                <Section title="Refeições">
                    <Note data={{
                        title: 'Salada Ravanello',
                        tags: [
                            {id: '1', name: 'cebola'},
                            {id: '2', name: 'alface'}
                        ]
                    }} />

                </Section>

            </Content>

            <Footer />


        </Container>
    )
}
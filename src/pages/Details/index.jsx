import { Container } from "./styles";

import { Header } from '../../components/Header';
import { Button } from '../../components/Button';
import { Section } from "../../components/Section";
import { Tag } from "../../components/Tag";
import { ButtonText } from "../../components/ButtonText";

export function Details () {
    return (
        <Container>
            <Header/>

            <ButtonText title="voltar"/>

            <Section title="Prato" />
                <ul>
                    <li>Item 1</li>
                    <li>Item 2</li>
                    <li>Item 3</li>
                </ul>

            <Section>
                <Tag title="tomate"/>
                <Tag title="pepino"/>
            </Section>

            <div>
                <h1>Hello World</h1>
                <span>hello</span>

                <Button title="pedir"/>
            </div>
        </Container>
    )
}
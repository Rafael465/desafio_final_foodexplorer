import { Container } from "./styles";

export function Footer() {
    return (
        <Container>
            <div className="bottom">
                <div id="top">
                    <img src="/src/assets/polygon gray.png" alt="blue polygon" />
                    <p>food explorer</p>
                </div>         
                
                <p>© 2023 - Todos os direitos reservados.</p>
            </div>
        </Container>
    )
}
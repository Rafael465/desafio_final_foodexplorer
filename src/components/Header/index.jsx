import { Container, Nav, Notification } from "./styles";
import { FiMenu } from 'react-icons/fi';
import { PiReceipt } from "react-icons/pi";

export function Header() {
    return (
        <Container>

            <Nav>
                <FiMenu/>                
            </Nav>

            <div id="top">
                <img src="/src/assets/polygon.png" alt="blue polygon" />
                <h1>food explorer</h1> 
            </div>            
            
            <Notification>
                <PiReceipt />
            </Notification>

        </Container>
    )
}
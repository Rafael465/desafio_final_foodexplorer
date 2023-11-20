import { InputSearch } from '../../components/InputSearch';
import { FiMenu } from 'react-icons/fi';
import { useAuth } from '../../hooks/auth';
import { PiReceipt } from "react-icons/pi";

import { Container, Nav, Notification } from "./styles";

export function Header() {
    const { signOut } = useAuth();

    return (
        <Container>

            <Nav>
                <FiMenu/>                
            </Nav>


            <div id="top">
                <img src="/src/assets/polygon.png" alt="blue polygon" />
                <h1>food explorer</h1> 
            </div>

            <button onClick={signOut}>
                logout
            </button>

            <div className='search'>
                <InputSearch />
            </div>

            <Notification>
                <PiReceipt />
            </Notification>

        </Container>
    )
}
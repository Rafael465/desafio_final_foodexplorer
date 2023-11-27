import { InputSearch } from '../../components/InputSearch';
import { FiMenu } from 'react-icons/fi';

import { useAuth } from '../../hooks/auth';
import { USER_ROLE } from '../../utils/roles';

import { PiReceipt } from "react-icons/pi";

import { Container, Nav, Notification } from "./styles";

export function Header() {

    const { signOut, user } = useAuth();

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
            

            {
                //[USER_ROLE.ADMIN].includes(user.role) && 
                // por exemplo: {user.role === USER_ROLE.ADMIN && <div className='search'>}
                
                user.role === USER_ROLE.ADMIN && //se eu colocar essa linha na frenta do codigo dentro de chaves posso separa linhas especificas de quem acessa
                <>
                    <div className='search'>   
                        <InputSearch />
                    </div>
                </>
            }

            <Notification>
                <PiReceipt />
            </Notification>

        </Container>
    )
}
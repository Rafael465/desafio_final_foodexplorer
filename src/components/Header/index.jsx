import { InputSearch } from '../../components/InputSearch';
import { FiMenu } from 'react-icons/fi';

import { useAuth } from '../../hooks/auth';
import { USER_ROLE } from '../../utils/roles';

import { PiReceipt, PiSignOut } from "react-icons/pi";

import { Container, Nav, Notification } from "./styles";
import { useNavigate } from 'react-router-dom';

export function Header() {


    const { signOut, user } = useAuth();
    const navigate = useNavigate();

    const handleAdd = () => {
        navigate(`/add`);
    }

    return (
        <Container>

            <Nav>
                <FiMenu/>                
            </Nav>

            <div id="top">
                <img src="/src/assets/polygon.png" alt="blue polygon" />
                <h1>food explorer</h1> 
            </div>

            <div className='search'>   
                    <InputSearch />
            </div>
            

            <Notification>
                {user.role === USER_ROLE.CUSTOMER && 
                    <div className='receipt'>
                        <PiReceipt />
                        <h2>Pedidos (0)</h2>
                    </div>                    
                }

                {user.role === USER_ROLE.ADMIN &&
                    <div className='add'>
                        <h2 onClick={handleAdd}>Novo prato</h2>
                    </div> 
                }
            </Notification>            

            <button id="signOut" onClick={signOut}>
                <PiSignOut />
            </button>


        </Container>
    )
}
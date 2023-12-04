import { InputSearch } from '../../components/InputSearch';
import { FiMenu } from 'react-icons/fi';

import { useAuth } from '../../hooks/auth';
import { USER_ROLE } from '../../utils/roles';

import { IoSearchOutline, IoClose } from "react-icons/io5";
import { PiReceipt, PiSignOut } from "react-icons/pi";

import { Container, Nav, Notification } from "./styles";
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

export function Header({ setSearch, search }) {

    const { signOut, user } = useAuth();
    const navigate = useNavigate();
    const [menuIsOpen, setMenuOpen] = useState(false);

    const openMenu = () => {
        setMenuOpen(true);
    };

    const closeMenu = () => {
        setMenuOpen(false);
    };

    const handleAdd = () => {
        navigate(`/add`);
    }

    return (
        <Container>

            <Nav className='hamburger'>
                <FiMenu onClick={openMenu}/>                
            </Nav>

            <div className={`menu ${menuIsOpen ? 'open' : ''}`}>
            
                <div className='closeContent'>
                    <button className='close' onClick={closeMenu}>
                        <IoClose />
                        <h2>Menu</h2>
                    </button>
                </div>

                <div className='content'>

                    <div className='searchMenu'>

                        <IoSearchOutline className='searchIcon'/>

                        <input 
                            className='search'
                            type="search"
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}                     
                        />
                    </div>

                    {user.role === USER_ROLE.ADMIN && 
                        <h2 onClick={handleAdd}>Novo prato</h2>
                    }

                    <h2 onClick={signOut}>Sair</h2>
                </div>
            </div>

            <div id="top">
                <img src="/src/assets/polygon.png" alt="blue polygon" />
                <h1>food explorer</h1> 
            </div>

            <div className='searchContent'>

                <IoSearchOutline className='searchIcon'/>

                <input 
                    className='search'
                    type="search"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}                     
                />
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
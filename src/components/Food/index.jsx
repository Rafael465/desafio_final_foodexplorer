import { Container } from './styles';

import { useAuth } from '../../hooks/auth';
import { USER_ROLE } from '../../utils/roles';
import { Ingredient } from '../Ingredient';
import { api } from '../../services/api';
import { MdKeyboardArrowRight } from "react-icons/md";
import { FiPlus, FiMinus } from "react-icons/fi";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import { MdEdit } from "react-icons/md";
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export function Food({ data, ...rest }) {
    const { user } = useAuth();
    const [amount, setAmount] = useState(0);
    const navigate = useNavigate();

    const handleIncrement = () => {
        setAmount(prevAmount => prevAmount +1);
    };

    const handleDecrement = () => {
        setAmount(prevAmount => prevAmount -1);
    };

    const handleEdit = () => {
        navigate(`/edit/${data.id}`);
    }

    const handleButton = (e) => {
        e.preventDefault();
        alert(`Adicionado ${amount} unidades de ${data.title}`)
    }

    return (
        <Container {...rest}>
            

            {user.role === USER_ROLE.CUSTOMER && 
                <div id='heart'>
                    <FaRegHeart />
                </div>
            }

            {user.role === USER_ROLE.ADMIN &&
                <div id='edit'>
                    <button onClick={handleEdit}><MdEdit /></button>
                </div>                
            }

            <div id='content'>
                <img 
                    src={`http://localhost:3333/files/${data.image}`}
                    alt="prato de salada" 
                />

                <div id='foodName'>
                    <h1>{data.title}</h1>
                    <MdKeyboardArrowRight id="arrow"/>
                </div>

                {user.role === USER_ROLE.ADMIN && 
                    <p>{data.description}</p>
                }

                <h2>R$ {data.price}</h2>

                {user.role === USER_ROLE.CUSTOMER && 
                    <div id="buy">
                        <div id='amount'>
                            <FiMinus onClick={handleDecrement}/>
                            <h1>{amount}</h1>
                            <FiPlus onClick={handleIncrement}/>
                        </div>
                        
                        <button id='include' title="include" onClick={handleButton}>Include</button>                        
                    </div>

                }
                
                             

                
                

            </div>

        </Container>
    )
}
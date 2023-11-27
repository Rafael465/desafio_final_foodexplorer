import { Container } from './styles';
import { Ingredient } from '../Ingredient';
import { Button } from '../../components/Button';

import { MdKeyboardArrowRight } from "react-icons/md";
import { FiPlus, FiMinus } from "react-icons/fi";

export function Food({ data, ...rest }) {
    return (
        <Container {...rest}>
            <img src="/src/assets/Mask group-3.png" alt="prato de salada" />

            <div id='foodName'>
                <h1>{data.title}</h1>
                <MdKeyboardArrowRight id="arrow"/>
            </div>

            <h2>R$ {data.price}</h2>

            <div id="amount">
                <FiMinus />
                <h1>01</h1>
                <FiPlus />
            </div>

            <Button title="incluir"/>

            {/* 
            
            {
                data.ingredient &&
                <footer>
                    {
                        data.ingredient.map( ingredient => <Ingredient key={ingredient.name} title={ingredient.name} />)
                    }
                </footer>
            }
            */}

        </Container>
    )
}
import { Container } from './styles';
import { Ingredient } from '../Ingredient';

export function Food({ data, ...rest }) {
    return (
        <Container {...rest}>
            <h1>{data.title}</h1>

            {
                data.ingredient &&
                <footer>
                    {
                        data.ingredient.map( ingredient => <Ingredient key={ingredient.name} title={ingredient.name} />)
                    }
                </footer>
            }
        </Container>
    )
}
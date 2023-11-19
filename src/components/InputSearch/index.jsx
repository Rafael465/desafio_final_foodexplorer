import { Container } from "./styles";

export function InputSearch({ icon: Icon, ...rest }) {
    return (
        <Container>
            <input {...rest} />
        </Container>
    )
}
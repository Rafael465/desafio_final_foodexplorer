import { Container } from "./styles";

export function Input({ icon: Icon, title, ...rest }) {
    return (
        <Container>
            <h2>{title}</h2>
            <input {...rest} />
        </Container>
    )
}
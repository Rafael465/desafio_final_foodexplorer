import { Container, TagsContainer } from './styles';

export function Section ({ title, children}) {
    return (
        <Container>
            <h2>{title}</h2>
            <div>
                <TagsContainer>{children}</TagsContainer>                
            </div>
        </Container>
    )
}
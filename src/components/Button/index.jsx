import { Container } from "./styles";

export function Button({ icon, title, loading = false, ...rest}){

    return(
        <Container 
            type="button"
            disabled={loading}
            {...rest}
        >
            {icon && <span className="icon">{icon}</span>}
            {loading ? 'Carregando...' : title}
        </Container>
    );
}
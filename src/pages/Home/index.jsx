import { Container, Form, Content  } from "./styles";

import { api } from "../../services/api";

import { Header } from "../../components/Header";
import { Food } from "../../components/Food";
import { Footer } from "../../components/Footer";
import { useEffect, useState, useRef } from "react";
import { useNavigate } from "react-router-dom";

export function Home() {


    const [search, setSearch] = useState("");
    const [ingredientSelected, setIngredientSelected] = useState([]);
    const [foods, setFoods] = useState([]);

    
    const [currentPage, setCurrentPage] = useState(0);
    const itemsPerPage = 4;

    function handleNextPage() {
        setCurrentPage(currentPage +1);
    }

    function handlePrevPage() {
        setCurrentPage(currentPage -1);
    }

    const navigate = useNavigate();

    function handleDetails(id){
        navigate(`/details/${id}`);
    }

    useEffect(() => {
        async function fetchFoods() {
            const response = await api.get(`/foods?title=${search}&ingredient=${ingredientSelected}`, { withCredentials: true });
            setFoods(response.data)
        };
        
        fetchFoods();

    }, [ingredientSelected, search]);

    return (
        
        <Container>            

            <Header/>
            
            <Form>
                <div id="top">
                    <img src="/src/assets/pngegg2.png" alt="blue polygon" />
                    
                    <div>
                        <h1>Sabores inigualáveis</h1>
                        <p>Sinta o cuidado do preparo com ingredientes selecionados.</p>
                    </div>
                </div>
            </Form>

            <Content>

                <div className="app">
                    <h2>Refeições</h2>
                                                            
                    <div className="test">
                        {foods.slice(currentPage * itemsPerPage, (currentPage +1) * itemsPerPage).map((food) => (
                            <Food key={String(food.id)} data={food} />
                        ))}
                    </div>
                    {currentPage > 0 && (
                        <div className="arrow arrow-left" onClick={handlePrevPage}>
                            &#9665;
                        </div>
                    )}
                    {foods.length > (currentPage +1) * itemsPerPage && (
                        <div className="arrow arrow-right" onClick={handleNextPage}>
                            &#9655;
                        </div>
                    )}
                </div>          
            </Content>

            <Footer id="footer"/>

        </Container>
    )
}
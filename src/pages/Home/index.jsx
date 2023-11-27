import { Container, Form, Menu, Content  } from "./styles";

import { motion } from "framer-motion";

import { api } from "../../services/api";

import { Header } from "../../components/Header";
import { Section } from "../../components/Section";
import { Food } from "../../components/Food";
import { Card } from "../../components/Card";
import { Footer } from "../../components/Footer";
import { useEffect, useState, useRef } from "react";
import { useNavigate } from "react-router-dom";

export function Home() {
    const carousel = useRef();
    const [width, setWidth] = useState(0);

    useEffect(() => {
        setWidth(carousel.current?.scrollWidth - carousel.current?.offsetWidth)
    }, []);


    const [search, setSearch] = useState("");
    const [ingredientSelected, setIngredientSelected] = useState([]);
    const [foods, setFoods] = useState([]);

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
                <motion.div ref={carousel} className="carousel" whileTap={{ cursor: "grabbing"}}>
                    <motion.div 
                        className="inner"
                        drag="x"
                        dragConstraints={{ left: -width, right: 0}}
                    >

                        {
                            foods.map(food => (
                                <Food className="item"
                                    key={String(food.id)}
                                    data={food}
                                    onClick={() => handleDetails(food.id)}                                
                                />                       
                            ))
                        }

                    </motion.div>
                </motion.div>                        
            </Content>

            <Footer id="footer"/>

        </Container>
    )
}
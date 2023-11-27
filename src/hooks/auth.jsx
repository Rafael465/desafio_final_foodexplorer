import { createContext, useContext, useState, useEffect } from "react";

import { api } from '../services/api';

export const AuthContext = createContext({});

function AuthProvider({ children }) {
    const [data, setData] = useState({});

    async function signIn({ email, password }) {

        try {
            const response = await api.post(
                "/sessions", 
                { email, password }, 
                { withCredentials: true }
                );
                
            const { user } = response.data;

            localStorage.setItem("@foodexplorer:user", JSON.stringify(user));

            setData({ user });
            
        } catch (error) {
            if (error.response) {
                alert(error.response.data.message);
            } else {
                alert("Não foi possível entrar!");
            }
        }

    }

    function signOut() {
        localStorage.removeItem("@foodexplorer:user");

        setData({});
    }

    async function updateImage({ imageFile, id }) {
        try {
           /* if(imageFile){
                const imageUploadForm = new FormData();
                imageUploadForm.append("image", imageFile);

                const response = await api.patch("/foods/image", imageUploadForm);
                food.image = response.data.image ;            
            }*/
            const imageUploadForm = new FormData();
            imageUploadForm.append("image", imageFile);

            console.log(imageFile);

            await api.patch("/foods/" + id, imageUploadForm);
            //localStorage.setItem("@foodexplorer:user", JSON.stringify(food));

            //setData({ food, token: data.token });
            alert("Imagem atualizado!");

        } catch (error) {
            if (error.response) {
                alert(error.response.data.message);
            } else {
                alert("Não foi possível atualizar o perfil.");
            }
        }
    }

    useEffect(() => {
        const token = localStorage.getItem("@foodexplorer:token");
        const user = localStorage.getItem("@foodexplorer:user");

        if(user){
            setData({
                token,
                user: JSON.parse(user)
            });
        }

    }, []);

    return (
        <AuthContext.Provider value={{ 
            signIn,
            signOut,
            updateImage,
            user: data.user,
            }}
            >
                { children }
        </AuthContext.Provider>
    )
}

function useAuth() {
    const context = useContext(AuthContext);

    return context;
}

export { AuthProvider, useAuth }
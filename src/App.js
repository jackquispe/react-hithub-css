import {useState} from "react";


import Head from "./components/Head";
import UserInformation from "./components/UserInformation";
import SearchInformation from "./components/SearchInfo";
import Swal from "sweetalert2";
import './App.css';





const App = () => {

    const [inputText, setInputText] = useState("")
    
    const [user, setUser] = useState(null);

    function handleInputChange(event){
        setInputText(event.target.value)
    }

    async function searchUser(){
        try {
            const response = await fetch(`https://api.github.com/users/${inputText}`);
            const data = await response.json();

            if(data.message === "Not Found"){
                Swal.fire('Error', 'Usuario no encontrado', 'error');
            }

            setUser(data);

        } catch (error) {
            console.log(error)
        }
    }
  
  return (
    <div className="container">
        
        <Head/>
        
        <SearchInformation 
            handleInputChange={handleInputChange}
            inputText={inputText}
            searchUser={searchUser}/>

        {/**Aca podemos hacer una validacion donde digamos que el div que siga exista
         * siempre y cuando el user teng adatos*/}

        {
            user && (
                <UserInformation user={user}/>
            )
        }
        
        
    </div>
  
  );
}

export default App;

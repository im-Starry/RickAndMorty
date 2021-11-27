import React, { useState, useEffect } from "react";
import { useParams } from "react-router";
import Footer from "../components/Footer";
import Navigation from "../components/Navigation";
import CharaDetails from "../components/CharaDetails";



const Details = () =>
{
    const [chara, setChara] = useState ({});
    const params = useParams();

    useEffect(()=> {
        fetch(`https://rickandmortyapi.com/api/character/${params.charaId}`)
        .then(response => response.json())
        .then(data => setChara(data));


    }, 
    
     // eslint-disable-next-line
    []);
    return(
        <>
        <Navigation />
        <CharaDetails  chara={chara}/>
        <Footer />
        </>
    );
}

export default Details;
import React, { useState, useEffect } from "react";
import CharaItems from "./CharaItem";


const Charas = () => {
  const [charas, setCharas] = useState([]);
  const [text, setText] = useState('');

  useEffect(() => {
    fetch('https://rickandmortyapi.com/api/character')
    .then(response => response.json())
    .then(data => setCharas(data.results));
  // eslint-disable-next-line
  }, []);

  

  const handleChange = e => setText(e.target.value);

  const handleSubmit = (e) => {
    e.preventDefault();

    fetch(`https://rickandmortyapi.com/api/character/?name=${text}`)
    .then(response => response.json())
    .then(data => setCharas(data.results));

    setText(''); 
  }

  return (
    <section className="py-5">
      <div className="container text-light px-4 px-lg-5 mt-5">
        <h2>Search character</h2>
        <form onSubmit={handleSubmit}>
          <input typt="text" className="form-control bg-dark text-light" placeholder="Search Character" onChange={handleChange} value={text}/>
        </form>

        <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center my-4"> 
        { charas.map((chara) => <CharaItems key={chara.id} chara={chara}  />) }
        </div>
      </div>
    </section>
  );
};

export default Charas;
 
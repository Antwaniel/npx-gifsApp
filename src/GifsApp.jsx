import React, { useState } from "react";
import AddCategory from "./components/AddCategory";
import {GifGrid} from './components/GifGrid'

const GifApp = () => {
    // const categories = ['One Punch', 'Samurai X', 'Dragon Ball', 'Naruto Shippuden']

  const [categories, setCategories] = useState([
   'Naruto'
  ]);


//   const handleAdd = () => {
//     // setCategories( [ ...categories, 'Naruto Shippuden' ]);

//     // callback, cats:estado anterior
//     setCategories((cats) => [...cats, "Naruto"]);
//   };

  return (
    <>
      <h2>Gifs React App</h2>

      <AddCategory 
       setCategories={ setCategories }
      />

      <hr />

      <ol>
        {

        categories.map((category) => (

              <GifGrid 
              key={category}
              category={ category }
              />
          )
          
        )
        
        }


      </ol>
    </>
  );
};

export default GifApp;

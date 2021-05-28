// import React, {useEffect, useState} from 'react'
// import Main from './Main'

// export default function Receipe() {

// const AAP_ID =  "6d3ccf5b";

//  const API_KEY = "1b7d7536d1ec3b091f89bf42bb3bb1f6"

//  const [email, setEmail] = useState([])
   
// useEffect(() => {
//    getRecipes();
// }, [])

// const getRecipes = async () => {
// const response = await fetch(
//     `https://api.edamam.com/search?q=chicken&app_id=${AAP_ID}&app_key=${API_KEY}`
//     )
// const data = await response.json();
// console.log(data.hits);
// }

//     return (
//         <div>

//            
//            <form className="search-form">
//             <input type="text"  className="search-bar" placeholder="search your receipe"/>
//             <button className="search-button" type="submit">Search</button>
//             </form>
            
//             {email.forEach(response =>(
               
//                     <div>
//                        <Main/>
//                     </div>
                
               
//             ))}


//         </div>
//     )
// }

import { useEffect , useState } from "react";
import Wishlist from "./Wishlist";

const AnimesList = ({animes}) => {

    const [wish , setWish ] = useState([]);

    useEffect(()=>{

        if(localStorage.getItem("wish")==null) // if wish array is not present before
        {
        localStorage.setItem("wish" , "[]");   // then only you add wish array
        }
    }, [])

    let handleWishlist = (id)=>
    {
       let x = localStorage.getItem("wish");
       x = JSON.parse(x);

       if(!x.includes(id))  // if id is not present
       {
       alert ("added from wishlist");
       x.push(id);
       x = JSON.stringify(x);
       localStorage.setItem("wish" , x)
       console.log(x);
       }
       else{
         alert("removed from wishlist");
         let i = x.indexOf(id);
         x.splice(i , 1);
         x = JSON.stringify(x);
         localStorage.setItem("wish",x);
       }

    }
      return ( 
        <div className="animes-list">
           {
            animes.map((anime)=>{
                return(
            
                    <div key={anime.mal_id} className="anime">
                    <img src={anime.images.jpg.small_image_url} alt="poster not found"/>
                    <h2>title: {anime.title}</h2>
                    <h2>type: {anime.type}</h2>
                    <h2>year: {anime.year}</h2>
                    <button onClick={()=>{handleWishlist(anime.mal_id)}}> 
                      &#10084;
                    </button>
                
                    </div>
                    
                )
            })
           }
        </div>
     );
        }
 
export default AnimesList;
import { useEffect, useState } from "react";
import useFetch from "./useFetch";
import AnimesList from "./AnimesList";

const Wishlist = () => {

    let {data : animes , pending , error} = useFetch("https://api.jikan.moe/v4/anime");

    const[wishListAnimes , setwishListAnimes] = useState(null)

    const[wish , setwish] = useState(null)

    useEffect(()=>{
        let wish = localStorage.getItem("wish")
        wish = JSON.parse(wish);
         setwish(wish);     
    }, [])

    return ( 
        <div>
            {pending && <div class="spinner-border text-primary" role="status">
             <span class="visually-hidden">Loading...</span>
            </div>}
            {animes && <AnimesList animes={animes.filter((anime)=>{return wish.includes(anime.mal_id) })}/> }

        </div>
     );
}
 
export default Wishlist;
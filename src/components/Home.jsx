import useFetch from "./useFetch";
import AnimesList from "./AnimesList";
const Home = () => {
    let {data : animes , pending , error} = useFetch("https://api.jikan.moe/v4/anime")
    return (  
        <div>
            <h1 className="text" align="center">display all animes</h1>
            {pending && <div class="spinner-border text-primary" role="status">
             <span class="visually-hidden">Loading...</span>
            </div>}
            {animes && <AnimesList animes={animes}/> }
        </div>

    );
}
 
export default Home;
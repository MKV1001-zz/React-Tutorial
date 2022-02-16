import MeetupItemList from "../components/Meetups/MeetupListItem";
import  {useContext} from "react"
import FavouritesContext from  "../store/favourite-context";
function FavouritesPage(){

    const favouritesCtx = useContext(FavouritesContext);
    const favourites = favouritesCtx.favourites;
    const totalFavourites = favouritesCtx.totalFavourites
    let content;
    if (totalFavourites===0){
      
        content =<p>You have no Favourites, start adding some</p>
      
    } else{
        content = <MeetupItemList meetups={favourites}></MeetupItemList>
    }
    return <div>
        <h1>
            My Favourites
        </h1>
        
         {content}
    </div>

}

export default FavouritesPage;
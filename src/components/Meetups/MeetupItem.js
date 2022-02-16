import classes from "./MeetupItem.module.css";
import Card from "../ui/Card";
import  {useContext} from "react"
import FavouritesContext from "../../store/favourite-context";
function MeetupItem(props) {
  const favaouriteCtx=useContext(FavouritesContext);
  const itemIsFavourite = favaouriteCtx.itemIsFavourite(props.meetup.id);
  function toggleFavouriteStatusHandler(){
    if(itemIsFavourite){
      favaouriteCtx.removeFavourite(props.meetup.id);
    } else{
      favaouriteCtx.addFavourite({
        ...props.meetup
       })
    }

  }
  return (
    <Card>
      <li key={props.key} className={classes.item}>
        <div className={classes.image}>
          <img src={props.meetup.image} alt=""></img>
        </div>
        <div className={classes.content}>
          <h1>{props.meetup.title}</h1>
          <address>{props.meetup.address}</address>
          <p>{props.meetup.description}</p>
        </div>
        <div className={classes.actions}>
          <button  onClick={toggleFavouriteStatusHandler}>{itemIsFavourite?"Remove From Favourites":"Add to Favourites"}</button>
        </div>
      </li>
    </Card>
  );
}

export default MeetupItem;

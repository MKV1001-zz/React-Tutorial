import { createContext,useState } from "react";

const FavouritesContext = createContext({
  favouritesKey: [],
  totalfavourites: 0,
  addFavourite: (favouriteMeetup)=>{},
  removeFavourite:(meetupId)=>{},
  itemIsFavourite:(meetupId)=>{}
});

export function FavouritesContextProvider(props) {
    const [userFavourites, setUserFavourites] = useState([]);
    

    function addfavouriteHandler(favouriteMeetup){
        setUserFavourites((prev)=>{
            return prev.concat(favouriteMeetup);
        })
    }

    function removefavouriteHandler(meetupId){
        setUserFavourites((prev)=>{
            return prev.filter(meetup=> meetup.id !== meetupId)
        })
    }

    function itemIsFavourite(meetupId){
         return userFavourites.some(meetup=>meetup.id===meetupId)
    }

    const context ={
        favourites:userFavourites,
        totalFavourites: userFavourites.length,
        addFavourite: addfavouriteHandler,
        removeFavourite: removefavouriteHandler,
        itemIsFavourite: itemIsFavourite
    };
  return (
    <FavouritesContext.Provider value={context}>{props.children}</FavouritesContext.Provider>
  );
}

export default FavouritesContext;

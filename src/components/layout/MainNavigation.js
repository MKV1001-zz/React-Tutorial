import { Link } from "react-router-dom";
import classes from "./MainNavigation.module.css";
import FavouritesContext from "../../store/favourite-context";
import { useContext } from "react";
function MainNavigation() {
  const favouriteCtx = useContext(FavouritesContext);
  const number = favouriteCtx.totalFavourites
  return (
    <header className={classes.header}>
      <div className={classes.logo}>React Meetups</div>
      <nav>
        <ul>
          <li>
            <Link to="/">All Meetups</Link>
          </li>
          <li>
            <Link to="/newmeetups">New meetups</Link>
          </li>
          <li>
            <Link to="/Favourites">My Favourites<span className={classes.badge}>{number}</span> </Link>
             
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MainNavigation;

import { Link } from "react-router-dom";
import style from "./Navbar.module.css";
import Searchbar from "../Searchbar/Searchbar";
const Navbar = ({ handleSubmit, handleUpdate, value }) => {
  return (
    <header className={style.header}>
      <div className={`${style.wrapper} container`}>
        <Link onClick={handleUpdate} className={style.link} to="/">
          HomePage
        </Link>
        {value ? <Searchbar handleSubmit={handleSubmit} /> : ""}
      </div>
    </header>
  );
};
export default Navbar;

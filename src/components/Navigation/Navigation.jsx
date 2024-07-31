import clsx from "clsx";
import { NavLink } from "react-router-dom"
import s from './Navigation.module.css';

const Navigation = () => {

  const buildLinkClass = ({ isActive }) => {
    return clsx(s.link, isActive && s.active);
  };

  return (
    <header className={s.header}>
      <div>
      <nav>
<ul className={s.nav}>
  <li><NavLink className={buildLinkClass} to='/'>Home</NavLink></li>
  <li><NavLink className={buildLinkClass} to='/movies'>Movies</NavLink></li>
</ul>
</nav>
      </div>
    </header>
    
  )
}

export default Navigation

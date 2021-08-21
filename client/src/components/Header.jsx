import { Link } from "react-router-dom";
import { useContext } from "react"
import { UserContext } from "../util/userContext";

export default function Header() {
  const { user, setUser } = useContext(UserContext);

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <a className="navbar-brand" href="/">Quizlit</a>

      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item"><Link className='nav-link' to='/'>Home</Link></li>
          <li className="nav-item"><Link className='nav-link' to='/dashboard'>Dashboard</Link></li>
        </ul>
      </div>

      {
        user ?
          <ul className="navbar-nav">
            <li className="nav-item profile-image-wrapper">
              <Link className='nav-link' to='/profile'><img className='profile-image' src={user.imageUrl}/></Link>
            </li>
            <li className="nav-item">
              <Link className='nav-link' to='/logout'>Logout</Link>
            </li>
          </ul>
        :
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link className='nav-link' to='/login'>Login</Link>
            </li>
          </ul>
      }
    </nav>
  );
}
import { Link, useNavigate } from "react-router-dom"
import "./NavBar.css"

export const NavBar = () => {
  const navigate = useNavigate()

  return (
    <ul className="navbar">
      <li className="navbar__item active">
      <Link className="navbar__link" to="/">Locations</Link>
      <Link className="navbar__link" to="/employees">Employees</Link>
      <Link className="navbar__link" to="/customers">Customers</Link>
      <Link className="navbar__link" to="/animals">Animals</Link>

      </li>
      {
        localStorage.getItem("kennels_user")
          ? <li className="navbar__item navbar__logout">
            <Link className="navbar__link" to="" onClick={() => {
              localStorage.removeItem("kennels_user")
              navigate("/", { replace: true })
            }}>Logout</Link>
          </li>
          : ""
      }
    </ul>
  )
}


// Node modules
import { Link } from "react-router-dom";

// Project files
import Logo from "assets/images/logo.svg";
import CustomerLinks from "data/links-customer.json";
import { useUser } from "state/UserContext";
import Searching from "./Search";

export default function NavigationBar() {
  // Global state
  const { setUser } = useUser();

  // Components
  const Links = CustomerLinks.map((item) => (
    <Link key={item.id} to={item.url}>
      {item.label}
    </Link>
  ));

  return (
    <nav className="navigation-bar">
      <Link to={CustomerLinks[0].url}>
        <img src={Logo} />
      </Link>
      <div>{Links}</div>
      <div className="left-items">
      </div>
      <div className="left-items">
        {/* Search bar goes here... */}
        <button className="button-logout" onClick={() => setUser(null)}>
          Logout
        </button>
      </div>
      <Searching/>
    </nav>
  );
}

import { Link } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import {
  StyledHeader,
  HeaderLeft,
  HeaderCenter,
  HeaderRight,
  Logo,
  MenuToggle,
} from "../styles/Header.styled";

function Header({ toggleSidebar }) {
  return (
    <StyledHeader>
      <HeaderLeft>
        <Link to="/" className="logo">
          <Logo
            // src="/assets/images/ethionet-logo.png" // Use this for src/assets/images/ethionet-logo.png
            src="/ethionet-logo.png" // Uncomment this if logo is in public/ethionet-logo.png
            alt="Ethionet Logo"
            onError={(e) => {
              e.target.src =
                "https://placehold.co/80x40/1e40af/ffffff?text=LOGO";
            }}
          />
        </Link>
      </HeaderLeft>
      <HeaderCenter>
        <h1 className="text-xl md:text-3xl font-bold text-orange-400">
          Ethionet Translation and Digital Services
        </h1>
      </HeaderCenter>
      <HeaderRight>
        <MenuToggle onClick={toggleSidebar} aria-label="Toggle navigation menu">
          <FaBars />
        </MenuToggle>
      </HeaderRight>
    </StyledHeader>
  );
}

export default Header;

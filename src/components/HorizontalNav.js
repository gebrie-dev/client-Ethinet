// src/components/HorizontalNav.js
import { useState } from "react";
import { Link } from "react-router-dom"; // Removed RouterNavLink
import { FaChevronDown, FaBars, FaTimes } from "react-icons/fa";
import {
  NavContainer,
  NavWrapper,
  Logo,
  NavLinks,
  NavItem,
  NavLink,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  MobileMenuToggle,
  MobileNav,
  MobileNavItem,
  MobileNavLink,
  MobileDropdownToggle,
  MobileDropdownMenu,
  MobileDropdownItem,
  OrderButton,
} from "../styles/HorizontalNav.styled";

function HorizontalNav({ openModal }) {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [mobileActiveDropdown, setMobileActiveDropdown] = useState(null);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  // This function is now used directly in onClicks to be more explicit.
  const toggleMobileDropdown = (dropdown) => {
    setMobileActiveDropdown(
      mobileActiveDropdown === dropdown ? null : dropdown
    );
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
    setMobileActiveDropdown(null);
  };

  return (
    <>
      <NavContainer>
        <NavWrapper>
          <Link to="/" className="logo">
            <Logo
              src="/ethionet-logo.png"
              alt="Ethionet Logo"
              onError={(e) => {
                e.target.src =
                  "https://placehold.co/80x40/1e40af/ffffff?text=LOGO";
              }}
            />
          </Link>

          <NavLinks>
            <NavItem
              onMouseEnter={() => setActiveDropdown("services")}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <DropdownToggle>
                Services{" "}
                <FaChevronDown className={activeDropdown === "services" ? "rotated" : ""} />
              </DropdownToggle>
              {activeDropdown === "services" && (
                <DropdownMenu>
                  <DropdownItem>
                    <NavLink to="/services#translation">Translation</NavLink>
                  </DropdownItem>
                  <DropdownItem>
                    <NavLink to="/services#digital-marketing">
                      Digital Marketing
                    </NavLink>
                  </DropdownItem>
                  <DropdownItem>
                    <NavLink to="/services#tutoring">Tutoring</NavLink>
                  </DropdownItem>
                </DropdownMenu>
              )}
            </NavItem>

            <NavItem>
              <NavLink to="/products">Products</NavLink>
            </NavItem>

            <NavItem>
              <NavLink to="/academy">Academy</NavLink>
            </NavItem>

            <NavItem>
              <NavLink to="/career">Career</NavLink>
            </NavItem>

            <NavItem>
              <NavLink to="/about">About Us</NavLink>
            </NavItem>

            <NavItem>
              <NavLink to="/institutional-services">
                Institutional Services
              </NavLink>
            </NavItem>

            <NavItem>
              <NavLink to="/booking-payment">Booking & Payments</NavLink>
            </NavItem>

            <NavItem>
              <NavLink to="/contact">Contact Us</NavLink>
            </NavItem>

            <NavItem>
              <OrderButton onClick={() => openModal("order")}>
                Start Order
              </OrderButton>
            </NavItem>
          </NavLinks>

          <MobileMenuToggle onClick={toggleMobileMenu}>
            {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
          </MobileMenuToggle>
        </NavWrapper>
      </NavContainer>

      {isMobileMenuOpen && (
        <MobileNav>
          <MobileNavItem>
            <MobileNavLink to="/" onClick={closeMobileMenu}>
              Home
            </MobileNavLink>
          </MobileNavItem>

          <MobileNavItem>
            <MobileDropdownToggle
              onClick={() => toggleMobileDropdown("services")}
            >
              Services{" "}
              <FaChevronDown className={mobileActiveDropdown === "services" ? "rotated" : ""} />
            </MobileDropdownToggle>
            {mobileActiveDropdown === "services" && (
              <MobileDropdownMenu>
                <MobileDropdownItem>
                  <MobileNavLink
                    to="/services#translation"
                    onClick={closeMobileMenu}
                  >
                    Translation
                  </MobileNavLink>
                </MobileDropdownItem>
                <MobileDropdownItem>
                  <MobileNavLink
                    to="/services#digital-marketing"
                    onClick={closeMobileMenu}
                  >
                    Digital Marketing
                  </MobileNavLink>
                </MobileDropdownItem>
                <MobileDropdownItem>
                  <MobileNavLink
                    to="/services#tutoring"
                    onClick={closeMobileMenu}
                  >
                    Tutoring
                  </MobileNavLink>
                </MobileDropdownItem>
              </MobileDropdownMenu>
            )}
          </MobileNavItem>

          <MobileNavItem>
            <MobileNavLink to="/products" onClick={closeMobileMenu}>
              Products
            </MobileNavLink>
          </MobileNavItem>

          <MobileNavItem>
            <MobileNavLink to="/academy" onClick={closeMobileMenu}>
              Academy
            </MobileNavLink>
          </MobileNavItem>

          <MobileNavItem>
            <MobileNavLink to="/career" onClick={closeMobileMenu}>
              Career
            </MobileNavLink>
          </MobileNavItem>

          <MobileNavItem>
            <MobileNavLink to="/about" onClick={closeMobileMenu}>
              About Us
            </MobileNavLink>
          </MobileNavItem>

          <MobileNavItem>
            <MobileNavLink
              to="/institutional-services"
              onClick={closeMobileMenu}
            >
              Institutional Services
            </MobileNavLink>
          </MobileNavItem>

          <MobileNavItem>
            <MobileNavLink to="/booking-payment" onClick={closeMobileMenu}>
              Booking & Payments
            </MobileNavLink>
          </MobileNavItem>

          <MobileNavItem>
            <MobileNavLink to="/contact" onClick={closeMobileMenu}>
              Contact Us
            </MobileNavLink>
          </MobileNavItem>

          <MobileNavItem>
            <OrderButton
              onClick={() => {
                openModal("order");
                closeMobileMenu();
              }}
            >
              Start Order
            </OrderButton>
          </MobileNavItem>
        </MobileNav>
      )}
    </>
  );
}

export default HorizontalNav;
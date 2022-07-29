import { menuItems } from "../../menuItems";
import MenuItems from "./MenuItems";
import { HiOutlineUser } from "react-icons/hi";
import { BsCart4 } from "react-icons/bs";
import { ImCancelCircle } from "react-icons/im";
import { GiHamburgerMenu } from "react-icons/gi";
import { Link } from "react-router-dom";
import React, { useState } from "react";
import { useCart } from "react-use-cart";
import { useNavigate } from "react-router-dom";

import "./Nav.css";

const Navbar = () => {
  const navigate = useNavigate();
  const { items } = useCart();
  const [tog, setTog] = useState(true);
  const [pro, setPro] = useState("");
  const Toggle = () => {
    setTog(!tog);
  };

  function NavbarFunction(text) {
    if (text === "Дома") {
      navigate("/");
    } else if (text === "Контакт") {
      navigate("/contact");
    } else if (text === "О нас") {
      navigate("/about");
    } else {
      if (text.length > 0) {
        navigate("/product");
        sessionStorage.setItem(`pro-text`, text);
      }
    }
  }
  return (
    <nav>
      <div className="row justify-content-between align-items-center">
        <div className="col-md-4 foo d-lg-none">
          <GiHamburgerMenu onClick={() => Toggle()} />
        </div>
        <div className="col-md-4 items-navbar">
          {" "}
          <ul className="menus">
            {menuItems.map((menu, index) => {
              const depthLevel = 0;
              return (
                <MenuItems
                  items={menu}
                  key={index}
                  depthLevel={depthLevel}
                  navfunc={NavbarFunction}
                />
              );
            })}
          </ul>
        </div>
        <div className="logo col-md-3 text-center">
          <img
            className="pt-3"
            src="https://www.portotheme.com/wordpress/porto/elementor/shop29/wp-content/themes/porto/images/logo/logo_ecommerce_black.png"
            alt=""
          />
        </div>
        <div className="admin col-md-4 d-flex justify-content-end">
          <div className="admin-icon" onClick={() => console.log("e")}>
            <Link className="text-dark" to="/login">
              <HiOutlineUser />
            </Link>
          </div>
          <div className="card-icon">
            <p className="count">{items.length}</p>
            <Link className="text-dark" to="/carts">
              {" "}
              <BsCart4 />
            </Link>
          </div>
        </div>

        {!tog ? (
          <div
            className="menu2"
            style={{
              width: tog ? "0" : "70%",
              height: tog ? "0" : "150%",
              top: tog ? "0" : "",
              zIndex: tog ? "-1" : "2",
            }}
          >
            <ul>
              <Link className="nav-items2 mt-5 text-dark cancel" to="/">
                <ImCancelCircle onClick={() => Toggle()} />
              </Link>
            </ul>
            <ul className="menus bg-white d-block w-75">
              {menuItems.map((menu, index) => {
                const depthLevel = 0;
                return (
                  <MenuItems
                    items={menu}
                    key={index}
                    depthLevel={depthLevel}
                    navfunc={NavbarFunction}
                  />
                );
              })}
            </ul>
          </div>
        ) : (
          false
        )}
      </div>
    </nav>
  );
};

export default Navbar;

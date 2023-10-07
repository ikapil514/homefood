import React, {useState } from "react";
import "./naci.css";
import { MenuItem, Button, Typography, Menu } from "@mui/material";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";

function Navbar() {
  const [isNavi, setIsNavi] = useState(false);
  const navmenu = () => {
    setIsNavi(true);
  };
  const close = () => {
    setIsNavi(false);
  };

  const [anchor, setAnchor] = useState(null);
  const open = Boolean(anchor);
  const handleClick = (ev) => {
    setAnchor(ev.currentTarget);
  };

  const handleClose = () => {
    setAnchor(null);
  };
  return (
    <div>
      <div className="navdiv1 shadow-lg shadow-slate-300">
        <div className=" navsideimage">
          <img src="../public/images/logo.png" alt="logo" />
        </div>
        <div className={`${isNavi ? "navdivon" : "navdiv2"}`}>
          <ul className="navmiddle">
            <li className="closebutton">
              <button onClick={close}>&#10513;</button>
            </li>
            <li>
              <Button color="inherit" href="/">
                <Typography
                  fontWeight={600}
                  fontSize={"22px"}
                  fontFamily={"monospace"}
                  textTransform={"capitalize"}
                >
                  Home
                </Typography>
              </Button>
            </li>
            <li>
              <Button color="inherit">
                <Typography
                  fontWeight={600}
                  fontSize={"22px"}
                  fontFamily={"monospace"}
                  textTransform={"capitalize"}
                >
                  About
                </Typography>
              </Button>
            </li>
            <li>
              <Button color="inherit">
                <Typography
                  fontWeight={600}
                  fontSize={"22px"}
                  fontFamily={"monospace"}
                  textTransform={"capitalize"}
                >
                  Contact Us
                </Typography>
              </Button>
            </li>
            <li>
              <Button
                color="inherit"
                id="food-button"
                onClick={handleClick}
                aria-controls={open ? "food-menu" : undefined}
                aria-expanded={open ? true : undefined}
                aria-haspopup="true"
                endIcon={<KeyboardArrowDownIcon />}
              >
                <Typography
                  fontWeight={600}
                  fontSize={"22px"}
                  fontFamily={"monospace"}
                  textTransform={"capitalize"}
                >
                  Food Menu
                </Typography>
              </Button>
              <Menu
                id="food-menu"
                open={open}
                onClose={handleClose}
                anchorEl={anchor}
                MenuListProps={{ "aria-labelledby": "food-button" }}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "right",
                }}
                transformOrigin={{
                  vertical: "",
                  horizontal: "right",
                }}
              >
                <MenuItem>
                  <a href="http://localhost:5173/breakfast">Breakfast</a>
                </MenuItem>
                <MenuItem>Lunch</MenuItem>
                <MenuItem>Dinner</MenuItem>
                <MenuItem>Snacks</MenuItem>
              </Menu>
            </li>
          </ul>
        </div>
        <div className="navdiv3">
          <ul>
            <li className="flex justify-evenly">
              <a href="#">
                <img
                  src="../public/images/instalogo.png"
                  alt="instalogo"
                  className="appslogo"
                />
              </a>
              <a href="#">
                <img
                  src="../public/images/fblogo.png"
                  alt="fblogo"
                  className="appslogo"
                />
              </a>
              <a href="#">
                <img
                  src="../public/images/pslogo.png"
                  alt="playstorelogo"
                  className="appslogo"
                />
              </a>
            </li>
          </ul>
        </div>
        <div>
          <button className="navbutton" onClick={navmenu}>
            &#8801;
          </button>
        </div>
      </div>
    </div>
  );
}

export default Navbar;

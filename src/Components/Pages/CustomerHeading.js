import * as React from 'react';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Fade from '@mui/material/Fade';


import { Link } from 'react-router-dom';

import { FaAngleDown, FaLocationDot } from "react-icons/fa6";


const TopBanner = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [moreMenuAnchorEl, setMoreMenuAnchorEl] = React.useState(null);
  const moreMenuOpen = Boolean(moreMenuAnchorEl);

  const handleMoreMenuClick = (event) => {
    setMoreMenuAnchorEl(event.currentTarget);
  };

  const handleMoreMenuClose = () => {
    setMoreMenuAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <div className="top1-1">
        <div className="top2">
          <Link to="/" className="top3-1">
            <img src="./Image/2.png" alt="" height="50px" width="50px" />
            <h2 className='logo-mini-heading'>CAR SERVICE</h2>
          </Link>
          <div>
            <button
              className="fade-button"
              aria-controls={open ? 'fade-menu' : undefined}
              aria-haspopup="true"
              aria-expanded={open ? 'true' : undefined}
              onClick={handleClick}
            ><div className='location-container'>
                <div className=''><FaLocationDot /> </div>
                <div className=''> Hyderabad</div>
                <div className=''> <FaAngleDown /></div>
              </div>
            </button>
            <Menu
              className="fade-menu"
              MenuListProps={{
                'aria-labelledby': 'fade-button',
              }}
              anchorEl={anchorEl}
              open={open}
              onClose={handleClose}
              TransitionComponent={Fade}
            >
              <MenuItem className='select-your-city' onClick={handleClose}><FaLocationDot /> Select your City</MenuItem>
              <input type="text" className='input-city-container-1' placeholder="" />
              <MenuItem>
                <input
                  className='input-city-container'
                  type="text"
                  placeholder="Search"
                  onClick={(e) => e.stopPropagation()} // Prevent menu from closing when clicking the input
                />
              </MenuItem>
              <MenuItem className="city-name" onClick={handleClose}>Hyderabad</MenuItem>
              <MenuItem className="city-name" onClick={handleClose}>New Delhi</MenuItem>
              <MenuItem className="city-name" onClick={handleClose}>Mumbai</MenuItem>
              <MenuItem className="city-name" onClick={handleClose}>Agra</MenuItem>
            </Menu>

          </div>

          <div className='header-top-5'>
            <input className='header-top-5' type="text" placeholder='Search' />
          </div>


          <div className="top5">
            <p>Spares</p>

            <Link className='blog-container-button' to="/blog">Blog</Link>

            <p>
              <button
                className="fade-button-1"
                aria-controls={moreMenuOpen ? 'more-fade-menu' : undefined}
                aria-haspopup="true"
                onClick={handleMoreMenuClick}
              >
                <div className='more-option-container'>
                  <div className=''>More</div>
                </div>
              </button>

              <Menu
                className="fade-menu custom-width-menu"
                MenuListProps={{
                  'aria-labelledby': 'fade-button',
                }}
                anchorEl={moreMenuAnchorEl}
                open={moreMenuOpen}
                onClose={handleMoreMenuClose}
                TransitionComponent={Fade}
              >
                <MenuItem className='more-menu-item' onClick={handleMoreMenuClose}><Link to="/faq" className='menuitem-all-option'>FAQ</Link></MenuItem>
                <MenuItem className='more-menu-item' onClick={handleMoreMenuClose}><Link to="/contactUs" className='menuitem-all-option'>Contact Us</Link></MenuItem>
                <MenuItem className='more-menu-item' onClick={handleMoreMenuClose}><Link to="/term-condition" className='menuitem-all-option'>Terms</Link></MenuItem>
                <MenuItem className='more-menu-item' onClick={handleMoreMenuClose}><Link to="/privacy-policy" className='menuitem-all-option'>Privacy</Link></MenuItem>
                <MenuItem className='more-menu-item' onClick={handleMoreMenuClose}><Link to="/offer" className='menuitem-all-option'>Offers</Link></MenuItem>
                <MenuItem className='more-menu-item' onClick={handleMoreMenuClose}><Link to="/reviews" className='menuitem-all-option'>Reviews</Link></MenuItem>

              </Menu>
            </p>

            <p>Customer</p>
          </div>
        </div>

      </div>
    </>
  );
};

export default TopBanner;

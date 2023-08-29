import * as React from 'react';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Fade from '@mui/material/Fade';

import { Link } from 'react-router-dom';

import {FaAngleDown,FaLocationDot} from  "react-icons/fa6";


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
          <div className="top3-1">
            <img src="./Image/2.png" alt="" height="20px" width="20px" />
            <h2>CAR SERVICE</h2>
          </div>
          <div>
      <button
        className="fade-button"
        aria-controls={open ? 'fade-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        onClick={handleClick}
      ><div className='location-container'>
        <div className=''><FaLocationDot/> </div>
        <div className=''> Hyderabad</div>
        <div className=''> <FaAngleDown/></div>
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
        <MenuItem className='select-your-city' onClick={handleClose}><FaLocationDot/> Select your City</MenuItem>
        <input type="text" className='input-city-container-1' placeholder="" />
        <MenuItem>
          <input
          className='input-city-container'
            type="text"
            placeholder= " Search"
            onClick={(e) => e.stopPropagation()} // Prevent menu from closing when clicking the input
          />
        </MenuItem>
        <MenuItem className="city-name" onClick={handleClose}>Hyderabad</MenuItem>
        <MenuItem  className="city-name" onClick={handleClose}>New Delhi</MenuItem>
        <MenuItem className="city-name" onClick={handleClose}>Mumbai</MenuItem>
        <MenuItem className="city-name" onClick={handleClose}>Agra</MenuItem>
      </Menu>
      
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
            <MenuItem className='more-menu-item' onClick={handleMoreMenuClose}>FAQ</MenuItem>
            <MenuItem className='more-menu-item' onClick={handleMoreMenuClose}>Contact US</MenuItem>
            <MenuItem className='more-menu-item' onClick={handleMoreMenuClose}>Terms</MenuItem>
            <MenuItem className='more-menu-item' onClick={handleMoreMenuClose}>Privacy</MenuItem>
            <MenuItem className='more-menu-item' onClick={handleMoreMenuClose}>Offers</MenuItem>
            <MenuItem className='more-menu-item' onClick={handleMoreMenuClose}>Reviews</MenuItem>
            
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

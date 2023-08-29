import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Fade from '@mui/material/Fade';
import {BsSearch} from 'react-icons'
import './TopBanner.css'
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
      <div className="top1">
        <div className="top2">
          <div className="top3">
            <img src="./Image/2.png" alt="" />
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
           
            <p>Login</p>
          </div>
        </div>
        <div className="top6">
          <div className="top7">
            <div className="top8">
              <h4>Experience The Best Car Services In Hyedrabad</h4>
              <p>We provide Our Services in over 100+ Major Cities also.</p>
            </div>
            <div className="top9">
              <div className='lorem-container-p'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
                nec egestas ligula. Nulla facilisi. Phasellus faucibus <br/>ligula id
                mauris varius, eget faucibus lorem fringilla. Vivamus ut felis
                porta, luctus libero eget, feugiat velit. Sed <br/>aliquet leo et ex
                sodales,
              </div>
            </div>
            <div className="top10">
              <div className="top11">
                <i class="fa-solid fa-star"></i>
                <div className="top12">
                  <h4>4.7</h4>
                  <p>Based on 100000+ Reviews</p>
                </div>
              </div>
              <div className="top11">
                
                <img src='/Image/Mask group.png' alt=''/>
                <div className="top12">
                  <h4>2,50,000</h4>
                  <p>Happy Customers</p>
                </div>
              </div>
            </div>
          </div>
          <div className="top13">
            <div className="top14">
              <h3>Book your Car Service Now !</h3>
              <p>Get instant quotes for your car service</p>
            </div>
            <div className="top15">
              <p>Rating</p>
              <i class="fa-solid fa-star"></i>
              <p>4.7/5</p>
            </div>
            <div className="top16">
                <select>
                    <option value="" >Select Your Car</option>
                </select>
                <input type="text" placeholder="Enter your Mobile Number" />
                <button>Check Prices For Free</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TopBanner;
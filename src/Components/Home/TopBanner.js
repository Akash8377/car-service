import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import { ServiceContext } from '../../context/ServiceContext';
import axios from 'axios';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Fade from '@mui/material/Fade';
import { BsSearch } from 'react-icons';
import { useAuth0 } from "@auth0/auth0-react";
import './TopBanner.css';



import { MenuModal } from '../Login/Login';
import { RegistrationModal } from '../Login/Registration';
import { FaAngleDown, FaLocationDot } from "react-icons/fa6";


const TopBanner = () => {
  const { carInfo, setCarInfo } = useContext(ServiceContext);
  const [anchorEl, setAnchorEl] = useState(null);
  const [moreMenuAnchorEl, setMoreMenuAnchorEl] = useState(null);
  const moreMenuOpen = Boolean(moreMenuAnchorEl);
  const [menuShow, setMenuShow] = useState(false);
  const [registrationShow, setRegistrationShow] = useState(false);
  const [userLocation, setUserLocation] = useState(null);
  const [carMake, setCarMake] = useState('');
  const [carModel, setCarModel] = useState('');
  const [fuelType, setFuelType] = useState('');
  const [mobileNumber, setMobileNumber] = useState('');
  const [carData, setCarData] = useState([]); // State for car data
  const [apiResponse, setApiResponse] = useState(null);
  const { isAuthenticated, user, loginWithRedirect, logout } = useAuth0();
  const isUser = isAuthenticated && user;
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const handleLogin = () => {
    setIsLoggedIn(true);
  };
  


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
  const navigate = useNavigate();

  const getUserLocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          setUserLocation({ latitude, longitude });
        },
        (error) => {
          console.error('Error getting user location:', error);
        }
      );
    } else {
      console.error('Geolocation is not supported by your browser.');
    }
  };

  useEffect(() => {
    getUserLocation();
  }, []);

  const [carMakes, setCarMakes] = useState([]);
  const [carModels, setCarModels] = useState([]);
  const [fuelTypes, setFuelTypes] = useState([]);

  // Fetch car makes from the API
  useEffect(() => {
    axios
      .get('https://kv-varlu.vercel.app/api/v1/model')
      .then((response) => {
        setCarMakes(response.data);
      })
      .catch((error) => {
        console.error('Error fetching car makes:', error);
      });
  }, []);

  // Fetch car models from the API based on selected make
  useEffect(() => {
    if (carMake) {
      axios
        .get(`https://kv-varlu.vercel.app/api/v1/manufacturer?make=${carMake}`)
        .then((response) => {
          setCarModels(response.data);
        })
        .catch((error) => {
          console.error('Error fetching car models:', error);
        });
    }
  }, [carMake]);

  // Fetch fuel types from the API based on selected model
  useEffect(() => {
    if (carModel) {
      axios
        .get(`https://kv-varlu.vercel.app/api/v1/fuelType?model=${carModel}`)
        .then((response) => {
          setFuelTypes(response.data);
        })
        .catch((error) => {
          console.error('Error fetching fuel types:', error);
        });
    }
  }, [carModel]);

  const handleCarMakeChange = (event) => {
    const selectedMake = event.target.value;
    setCarMake(selectedMake);

    setCarModel('');
    setFuelType('');
    setCarInfo(prev => ({ ...prev, manufacturer: selectedMake }));
  };

  const handleCarModelChange = (event) => {
    const selectedModel = event.target.value;
    setCarModel(selectedModel);
    setCarInfo(prev => ({ ...prev, model: selectedModel }));
  };

  const handleFuelTypeChange = (event) => {
    const selectedFuelType = event.target.value;
    setFuelType(selectedFuelType);
    setCarInfo(prev => ({ ...prev, fuelType: selectedFuelType }));
  };
  const handleCheckPrices = () => {
    if (mobileNumber && carMake && carModel && fuelType) {
      // Prepare the request data with carMake as model and carModel as make
      const requestData = {
        manufacturer: carModel,
        model: carMake,
        fuelType: fuelType,
      };

      // Send a GET request to the API
      axios
        .get('', {
          params: requestData,
        })
        .then((response) => {
          // Handle the API response here
          console.log('API Response:', response.data);

          // Navigate to the desired page, e.g., '/periodic-services'
          navigate('/periodic-services');
        })
        .catch((error) => {
          console.log('Error fetching car service prices:', error);
          // navigate('/periodic-services');


          // You can also log the error response for more details
          if (error.response) {

            console.log('Error Response Data:', error.response.data);

          }
        });
    }
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
            >
              <div className='location-container'>
                <div className=''><FaLocationDot /> </div>
                <div className=''>{userLocation ? `${userLocation.latitude.toFixed(2)}, ${userLocation.longitude.toFixed(2)}` : 'Fetching Location...'}</div>
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
                  placeholder=" Search"
                  onClick={(e) => e.stopPropagation()} // Prevent menu from closing when clicking the input
                />
              </MenuItem>
              <MenuItem className="city-name" onClick={handleClose}>Hyderabad</MenuItem>
              <MenuItem className="city-name" onClick={handleClose}>New Delhi</MenuItem>
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
                <MenuItem className='more-menu-item' onClick={handleMoreMenuClose}><Link to="/faq" className='menuitem-all-option'>FAQ</Link></MenuItem>
                <MenuItem className='more-menu-item' onClick={handleMoreMenuClose}><Link to="/contactUs" className='menuitem-all-option'>Contact Us</Link></MenuItem>
                <MenuItem className='more-menu-item' onClick={handleMoreMenuClose}><Link to="/term-condition" className='menuitem-all-option'>Terms</Link></MenuItem>
                <MenuItem className='more-menu-item' onClick={handleMoreMenuClose}><Link to="/privacy-policy" className='menuitem-all-option'>Privacy</Link></MenuItem>
                <MenuItem className='more-menu-item' onClick={handleMoreMenuClose}><Link to="/offer" className='menuitem-all-option'>Offers</Link></MenuItem>
                <MenuItem className='more-menu-item' onClick={handleMoreMenuClose}><Link to="/reviews" className='menuitem-all-option'>Reviews</Link></MenuItem>
              </Menu>
            </p>
            {isLoggedIn ? (
              <button className='nav-button-2' onClick={() => setIsLoggedIn(false)}>Logout</button>
            ) : (
              <>
                <button className='nav-button-2' onClick={() => setMenuShow(true)}>Login</button>
              </>
            )}

            <button className='nav-button-2' onClick={() => setRegistrationShow(true)}>Registration</button>
          </div>
          <MenuModal show={menuShow} onHide={() => { setMenuShow(false) }} onLogin={handleLogin} />

          <RegistrationModal show={registrationShow} onHide={() => { setRegistrationShow(false) }} />
        </div>
        <div className="top6">
          <div className="top7">
            <div className="top8">
              <h4>Experience The Best Car Services In Hyderabad</h4>
              <p>We provide Our Services in over 100+ Major Cities also.</p>
            </div>
            <div className="top9">
              <div className='lorem-container-p'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi
                nec egestas ligula. Nulla facilisi. Phasellus faucibus <br />ligula id
                mauris varius, eget faucibus lorem fringilla. Vivamus ut felis
                porta, luctus libero eget, feugiat velit. Sed <br />aliquet leo et ex
                sodales,
              </div>
            </div>
            <div className="top10">
              <div className="top11">
                <i className="fa-solid fa-star"></i>
                <div className="top12">
                  <h4>4.7</h4>
                  <p>Based on 100000+ Reviews</p>
                </div>
              </div>
              <div className="top11">
                <img src='/Image/Mask group.png' alt='' />
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
              <i className="fa-solid fa-star"></i>
              <p>4.7/5</p>
            </div>
            <div className="top16">
              <select value={carMake} onChange={handleCarMakeChange}>
                <option value="">Select Car Make</option>
                {carMakes.map((make) => (
                  <option key={make._id} value={make._id}>
                    {make.name}
                  </option>
                ))}
              </select>

              {carMake && (
                <select value={carModel} onChange={handleCarModelChange}>
                  <option value="">Select Car Model</option>
                  {carModels.map((model) => (
                    <option key={model._id} value={model._id}>
                      {model.name}
                    </option>
                  ))}
                </select>
              )}

              {carModel && (
                <select value={fuelType} onChange={handleFuelTypeChange}>
                  <option value="">Select Fuel Type</option>
                  {fuelTypes.map((fuel) => (
                    <option key={fuel._id} value={fuel._id}>
                      {fuel.name}
                    </option>
                  ))}
                </select>
              )}

              <input
                type="text"
                value={mobileNumber}
                onChange={(e) => setMobileNumber(e.target.value)}
                placeholder="Enter your Mobile Number"
              />

              {/* <Link to="/periodic-services"> */}
              {mobileNumber && carMake && carModel && fuelType ? (

                //  <Link to="/periodic-services">
                <button
                  className='top-banner-sidecar-button'
                  onClick={handleCheckPrices}
                  style={{ backgroundColor: '#001B39' }}
                >
                  Check Prices For Free
                </button>
                // </Link>





              ) : (
                <button
                  className='top-banner-sidecar-button'
                  style={{ backgroundColor: '#001B39' }}
                >
                  Check Prices For Free
                </button>
              )}
              {/* </Link> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TopBanner;
import React from 'react';
import { Menu, Image, Dropdown } from "semantic-ui-react";
import { Link } from 'react-router-dom';

const image1 = '/images/hazim_profile_pic.jpg';

const NavBar = () => {
    return (
        <div style={{ borderBottom: '1px solid lightgrey' }}>
            <Menu inverted>
                <Menu.Item>
                    <Image src={process.env.PUBLIC_URL + '/images/hazim_profile_pic.jpg'} avatar />
                </Menu.Item>
                <Menu.Item>
                    <Link to="/hazimsulaiman/">Home</Link>
                </Menu.Item>
                <Menu.Item>
                    <Dropdown text="Projects" inverted >
                        <Dropdown.Menu>
                            <Dropdown.Item>
                                <Link to="/hazimsulaiman/flask" style={{ color:"black" }}>
                                    Flask Familiarisation
                                </Link>
                            </Dropdown.Item>
                            <Dropdown.Item>
                                <Link to="/hazimsulaiman/chatboy" style={{ color:"black" }}>
                                    Chatboy
                                </Link>
                            </Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                </Menu.Item>
                <Menu.Item>
                    <Dropdown text="Work">
                        <Dropdown.Menu>
                            <Dropdown.Item>
                                <Link to="/hazimsulaiman/ubs" style={{ color:"black" }}>
                                    UBS
                                </Link>
                            </Dropdown.Item>
                            <Dropdown.Item>
                                <Link to="/hazimsulaiman/slb" style={{ color:"black" }}>
                                    Schlumberger
                                </Link>
                            </Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                </Menu.Item>
                <Menu.Item>
                    <Link to="/hazimsulaiman/fintechsg">
                        FintechSG
                    </Link>
                </Menu.Item>
                <Menu.Item>
                    <Link to="/hazimsulaiman/resume">
                        Resume
                    </Link>
                </Menu.Item>
            </Menu>
        </div>
    );
};

export default NavBar;
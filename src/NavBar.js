import React from 'react';
import { Menu, Image, Dropdown } from "semantic-ui-react";
import { Link } from 'react-router-dom';

const image1 = '/images/hazim_profile_pic.jpg';

const NavBar = () => {
    return (
        <div style={{ borderBottom: '1px solid lightgrey' }}>
            <Menu inverted>
                <Menu.Item>
                    <Image src={image1} avatar />
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
                            <Dropdown.Item text="UBS" href="/hazimsulaiman/ubs"/>
                            <Dropdown.Item text="Schlumberger" href="/hazimsulaiman/slb"/>
                        </Dropdown.Menu>
                    </Dropdown>
                </Menu.Item>
                <Menu.Item>
                    <a href="/hazimsulaiman/resume">Resume</a>
                </Menu.Item>
            </Menu>
        </div>
    );
};

export default NavBar;
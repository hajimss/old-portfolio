import React from 'react';
import { Menu, Image, Dropdown} from "semantic-ui-react";
//import Flask from './FlaskFam';

const image1 = '/images/hazim_profile_pic.jpg';

const NavBar = () => {
    return (
        <div style={{ borderBottom: '1px solid lightgrey' }}>
            <Menu inverted>
                <Menu.Item>
                    <Image src={image1} avatar />
                </Menu.Item>
                <Menu.Item>
                    <a href="/">Home</a>
                </Menu.Item>
                <Menu.Item>
                    <Dropdown text="Projects" inverted >
                        <Dropdown.Menu>
                            <Dropdown.Item href="/flask" text="Flask Familiarisation"/>
                            <Dropdown.Item href="/chatboy" text="Chatboy"/>
                        </Dropdown.Menu>
                    </Dropdown>
                </Menu.Item>
                <Menu.Item>
                    <Dropdown text="Work">
                        <Dropdown.Menu>
                            <Dropdown.Item text="UBS" href="/ubs"/>
                            <Dropdown.Item text="Schlumberger" href="slb"/>
                        </Dropdown.Menu>
                    </Dropdown>
                </Menu.Item>
                <Menu.Item>
                    <a href="/resume">Resume</a>
                </Menu.Item>
            </Menu>
        </div>
    );
};

export default NavBar;
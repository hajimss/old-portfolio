import React from 'react';
import { Menu, Image, Dropdown} from "semantic-ui-react";

const image1 = '/images/hazim_profile_pic.jpg';

const NavBar = () => {
    return (
        <div style={{ borderBottom: '1px solid lightgrey' }}>
            <Menu inverted>
                <Menu.Item>
                    <Image src={image1} avatar />
                </Menu.Item>
                <Menu.Item>
                    <a href="/hazimsulaiman/">Home</a>
                </Menu.Item>
                <Menu.Item>
                    <Dropdown text="Projects" inverted >
                        <Dropdown.Menu>
                            <Dropdown.Item href="/hazimsulaiman/flask" text="Flask Familiarisation"/>
                            <Dropdown.Item href="/hazimsulaiman/chatboy" text="Chatboy"/>
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
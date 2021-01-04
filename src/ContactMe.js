import React from 'react';
import { Icon, Segment } from "semantic-ui-react";

const ContactMe = () => {
    return (
        <Segment textAlign='center' inverted>
            <a href='https://github.com/hajimss'>
                <Icon name='github' inverted size='huge' />
            </a>
            <a href='https://www.linkedin.com/in/muhammad-hazim-bin-sulaiman-3386191a0/'>
                <Icon name='linkedin' inverted size='huge' />
            </a>
            <a href='mailto:hazim897@gmail.com'>
                <Icon name='mail' inverted size='huge' />
            </a>
        </Segment>        
    );
};

export default ContactMe;
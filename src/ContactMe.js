import React from 'react';
import { Icon, Segment, Label } from "semantic-ui-react";

const ContactMe = () => {
    return (
        <Segment textAlign='center' inverted>
            <a href='https://github.com/hajimss' target="blank">
                <Label as='a' image color='red' style={{ margin:'5px' }}>
                    <Icon name='github' inverted size='large' />
                    Github
                </Label>
            </a>
            <a href='https://www.linkedin.com/in/muhammad-hazim-bin-sulaiman-3386191a0/' target="blank">
                <Label as='a' image color='yellow' style={{ margin:'5px' }}>
                    <Icon name='linkedin' inverted size='large' />
                    LinkedIn
                </Label>
            </a>
            <a href='mailto:hazim897@gmail.com' target="blank">
                <Label as='a' image color='green' style={{ margin:'5px' }}>
                    <Icon name='mail' inverted size='large' />
                    Email
                </Label>
            </a>
            <a href='{process.env.PUBLIC_URL + "/files/Hazim_Resume.pdf"}' target="blank">
                <Label as='a' image color='blue' style={{ margin:'5px' }}>
                    <Icon name='file' inverted size='large' />
                    Resume
                </Label>
            </a>
        </Segment>        
    );
};

export default ContactMe;
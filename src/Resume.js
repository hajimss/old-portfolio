import React from "react";
import { Header, Icon, Segment } from "semantic-ui-react";

const Resume = () => {
    return (
        <Segment textAlign="center" inverted>
            <Header as="h1">Here is my resume!</Header>
            <a href="/files/Hazim_Resume.pdf" target="blank"><Icon name="file" size="massive"/></a>
        </Segment>
    );
}

export default Resume;
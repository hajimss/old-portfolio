import React from "react";
import { Container, Header, Segment, Image } from "semantic-ui-react";

const tf_image = "/images/tensorflow.png"

const Chatboy = () => {
    return (
        <div>
            <Segment inverted>
                <Container inverted>
                    <Header as="h1" inverted>Chatbot Project</Header>
                    <Image src={tf_image} size="medium"/>
                    <br/>
                    <p>In this project, I have collaborated with my friend, Adam, to create a chatbot that gets input from frontend users and it will respond with an appropriate answer.</p>
                </Container>
            </Segment>
        </div>
    );
}

export default Chatboy;
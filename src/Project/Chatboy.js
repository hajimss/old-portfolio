import React from "react";
import { Container, Header, Segment, Image, Icon } from "semantic-ui-react";

const tf_image = "/images/tensorflow.png"

const Chatboy = () => {
    return (
        <div>
            <Segment inverted>
                <Container textAlign="justified" inverted>
                    <Header as="h1" inverted>Chatbot Project</Header>
                    <Image src="https://cdn-images-1.medium.com/max/1200/1*iDQvKoz7gGHc6YXqvqWWZQ.png" size="medium"/>
                    <br/>
                    <p>In this project, I have collaborated with my friend, Adam, to create a chatbot that gets input from frontend users and it will respond with an appropriate answer. With the use of tensorflow library on python, we managed to come up with a Neural Network model. This is formed by setting up several intents and using them to test and train the model.</p>
                    <p>The backend is formed using python's Flask as it can work fluidly with the python codes of the model creation scripts. The frontend is set up by Adam who mainly created the user interface and have the queries connect to the endpoints that i have set up from the backend.</p>
                <Container>
                    <a href='https://github.com/hajimss/chatbot'>
                        <Icon name='github' inverted size='huge' />
                    </a>
                    <a href='https://chatboy2020.herokuapp.com/'>
                        <Icon name='linkify' inverted size='huge' />
                    </a>
                </Container>
                </Container>
            </Segment> 
        </div>
    );
}

export default Chatboy;
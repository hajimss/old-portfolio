import React from 'react';
import ContactMe from './ContactMe.js';
import { Divider, Segment, Image , Container, Header, Rating } from 'semantic-ui-react/';

const image1 = '/images/my_photo.jpg';

const Home = () => {
    return (
        <Segment horizontal inverted>
                <Container textAlign='center'  style={{ width:500 }} >
                    <Header as='h1' inverted>Hi my name is Hazim.</Header>
                    <Image src={image1} size='medium' centered rounded />
                    <Divider inverted horizontal>About Me</Divider>
                    <p>
                    Just finished school. 4 years of taking up Mechanical Engineering skills and knowledge was enriching to say the least. But I strongly feel an urge take up a new challenge. One that will grant me bountiful opportunities. So I find myself learning an array of skills that relate to Financial Technology. From learning the javascrpt language, to understanding useful tools such as git, it has thus far made me rediscover my interests, and ultimately what I intend to pursue in the future.
                    </p>
                    <Rating icon='heart' defaultRating={3} maxRating={3} />
                </Container>
                <ContactMe />
            </Segment>
    );
}

export default Home;
import React from 'react';
import ContactMe from './ContactMe.js';
import { Divider, Segment, Image , Container, Header, Rating, Grid, Card } from 'semantic-ui-react/';
import './Home.css';

const image1 = '/images/my_photo.jpg';
const faketube = '/images/faketube.jpg';
const calculator = '/images/calculator.png'
const pics = '/images/react-pics.png'
const chatboy = '/images/chatboy.png'
const flask = '/images/flask.png'

const Home = () => {
    return (
        <div>
        <Segment horizontal inverted>
                <Container textAlign='center'  style={{ width:500 }} >
                    <Header as='h1' inverted>Hi my name is Hazim.</Header>
                    <Image src={process.env.PUBLIC_URL + image1} size='medium' centered rounded />
                    <Divider inverted horizontal>About Me</Divider>
                    <p>
                    Just finished school. 4 years of taking up Mechanical Engineering skills and knowledge was enriching to say the least. But I strongly feel an urge take up a new challenge. One that will grant me bountiful opportunities. So I find myself learning an array of skills that relate to Financial Technology. From learning the javascript language, to understanding useful tools such as git, Kafka, SQL/noSQL databases, it has thus far made me rediscover my interests, and ultimately what I intend to pursue in the future.
                    </p>
                    <Rating icon='heart' defaultRating={3} maxRating={3} />
                </Container>
                <ContactMe />
            </Segment>
        <Segment inverted style={{ margin: '50px' }}>
            <Divider inverted horizontal>Projects</Divider>
            <Grid>
                <Grid.Row columns={3}>
                    <Grid.Column textAlign="center">
                        <p className='title'>React Apps</p>
                        <Card className='card' inverted centered>
                            <Image 
                                src={process.env.PUBLIC_URL + faketube}
                                as='a'
                                className='unBlur'
                                target='_blank'
                                href='https://hajimss.github.io/faketube/'
                            />
                            <Card.Content>
                                <Card.Header>FakeTube</Card.Header>
                                <Card.Description>
                                    An mock Youtube app which uses the YouTube API to grab videos and embed in the webpage.
                                </Card.Description>
                            </Card.Content>
                            <Card.Content extra>
                                React
                            </Card.Content>
                        </Card>
                        <Card className='card' centered>
                            <Image 
                                src={process.env.PUBLIC_URL + calculator}
                                as='a'
                                className='unBlur'
                                target='_blank'
                                href='https://hajimss.github.io/calculator/'
                            />
                            <Card.Content>
                                <Card.Header>Calculator</Card.Header>
                                <Card.Description>
                                    It's a calculator.
                                </Card.Description>
                            </Card.Content>
                            <Card.Content extra>
                                React
                            </Card.Content>
                        </Card>
                        <Card className='card' centered>
                            <Image
                                src={process.env.PUBLIC_URL + pics}
                                as='a'
                                className='unBlur'
                                target='_blank'
                                href='https://hajimss.github.io/react-pics/'
                            />
                            <Card.Content>
                                <Card.Header>React-Pics</Card.Header>
                                <Card.Description>
                                    Use this app to find quality pictures. This app uses the Unsplash API.
                                </Card.Description>
                            </Card.Content>
                            <Card.Content extra>
                                React
                            </Card.Content>
                        </Card>
                    </Grid.Column>
                    <Grid.Column textAlign="center">
                        <p className='title'>Chatboy2020</p>
                        <Card className='card' centered>
                            <Image 
                                src={process.env.PUBLIC_URL + chatboy}
                                as='a'
                                className='unBlur'
                                target='_blank'
                                href='https://hajimss.github.io/react-pics/'
                            />
                            <Card.Content>
                                <Card.Header>Chatbot App</Card.Header>
                                <Card.Description>
                                    An app which uses Neural Network type Machine Learning to give suitable answers for your queries.
                                </Card.Description>
                            </Card.Content>
                            <Card.Content extra>
                                React, Flask, TensorFlow
                            </Card.Content>
                        </Card>
                    </Grid.Column>
                    <Grid.Column textAlign="center">
                        <p className='title'>Flask</p>
                        <Card centered>
                            <Image 
                                src={process.env.PUBLIC_URL + flask}
                                as='a'
                                className='unBlur'
                                target='_blank'
                                href='https://hazimisusingflaskandmongo.herokuapp.com/'
                            />
                            <Card.Content>
                                <Card.Header>Flask Familiarisation</Card.Header>
                                <Card.Description>
                                    An Twitter mock app that uses MongoDB Atlas as a database.
                                </Card.Description>
                            </Card.Content>
                            <Card.Content extra>
                                React, Flask, MongoDB
                            </Card.Content>
                        </Card>
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        </Segment>
        </div>
        
    );
}

export default Home;
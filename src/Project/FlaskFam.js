import React from 'react';
import { Container, Segment, Image, Icon, Header } from 'semantic-ui-react';

const Flask = () => {
    return(
        <div>
            <Segment inverted>
                <Container textAlign="justified" inverted>
                    <Header as="h1" inverted>Flask Familiarisation Project</Header>
                    <Image src="https://www.pngkey.com/png/detail/98-985032_flask-logo-flask-python-icon.png" style={{ backgroundColor:"white" }} size="medium" rounded/>
                    <br/>
                    <p>
                        Flask is a useful web development tool based on python that is becoming increasingly popular for it's easy implementation to create routes for every html template created through the formulation of python functions and using jinja2 as a templating engine.
                        In this project, Flask was used with MongoDB as a database. A noSQL database was used because as of now, the web app does not require high volume of data and data can be easily read and written with this type of structure.
                        Check out the codes that go into this app on my github repository or visit the web app that I have deployed through heroku.
                    </p>
                    <Container>
                        <a href='https://github.com/hajimss/flask-and-mongo'>
                            <Icon name='github' inverted size='large' />
                        </a>
                        <a href='https://hazimisusingflaskandmongo.herokuapp.com/home'>
                            <Icon name='linkify' inverted size='large' />
                        </a>
                    </Container>
                </Container>
            </Segment>
             
        </div>
    );
}

export default Flask
import React from 'react';
import { Header, Segment, Container, Image } from 'semantic-ui-react';

const UBS = () => {
    return (
        <div>
            <Segment inverted>
                <Container textAlign="justified" inverted>
                    <Header as="h1" inverted>UBS SUPER Program</Header>
                    <Image src="https://1000logos.net/wp-content/uploads/2020/04/UBS-logo.jpg" size="medium" rounded />
                    <br/>
                        <p>
                        UBS SUPER Program is a 12-month program that is aimed to expose participants to 
                        </p>
                </Container>
            </Segment>
        </div>
    );
}

export default UBS;
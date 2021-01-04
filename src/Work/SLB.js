import React from 'react';
import { Container, Header, Segment, Image, Dropdown } from 'semantic-ui-react';

const slb_image = "/images/slb_friends.jpg"

const SLB = () => {
    return (
        <div>
            <Segment inverted>
                <Container textAlign="justified" inverted>
                    <Header as="h1" inverted>Internship With Schlumberger</Header>
                    <Image src={ slb_image } size="medium" rounded />
                    <br/>
                        <p>
                        Schlumberger is an oil and gas services company. In short, it manufactures and provides sevices to a long list of oil and gas companies (eg. ExxonMobil, Shell). In the second half of 2018, I had the privilege of doing an internship with Schlumberger in SWTC, short for Singapore Well Testing Centre (SWTC). The building is a hub of the development and production of the multiphase flowmeter (MPFM), which is a vital equipment for oil extraction.
                        My official title was Mechanical Engineer (Intern). I was attached to the Engineering department in SWTC where the department's main goal is to develop a new version of the MPFM. My job scope includes creating virtual 3D models for the parts that contribute to the end product using Creo, performing tolerance stack on parts that go to the final assembly and help out with calculations for the electrical and electronics team.
                        </p>
                </Container>
                <br/>
                <Container>
                    <Header as="h3" inverted>Related resources</Header>
                    <Dropdown selection text="Select document">
                        <Dropdown.Menu>
                            <Dropdown.Item>
                                <a href="/files/ME4101A_Final_Report.pdf" target="blank">
                                    Report
                                </a>
                            </Dropdown.Item>
                            <Dropdown.Item>
                                <a href="/files/IA_Final Oral Presentation.pptx" target="blank">
                                    Presentation Slides
                                </a>
                            </Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>
                </Container>
            </Segment>
        </div>
    );
}

export default SLB;
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
                            UBS SUPER Program is a 12-month program that is aimed to expose participants to the field they want to pursue (eg. Banking, Wealth Management, Technology) while at the same time, learn about all the aspects of modern banking such as Portfolio Management, Fintech tools, Basics of Finance, Behavioural Studies in Investing and more. The week is split into operational days where we carry out our respective jobs, and also study days, where the trainees learn about the modules as previously stated. This program offers a unique experience since we are allowed to obtain work experience while having a chance to gain more knowledge regarding the finance sector.
                        </p>
                        <p>
                            During my stint, I was allocated to the Network Services and Automation department. The department manages the servers that are used in UBS through remote monitoring. One of the ways in which we do so is through collating the data of the servers and keep them in Data Warehouse. During the period, I took on multiple projects to improve the monitoring process of the servers. One of which is the implementation of Apache Kafka, whose purpose is to create a messaging bus that realises any changes in the system and disseminates the messages to relevant personnel through a publisher/subscriber system.
                        </p>
                </Container>
            </Segment>
        </div>
    );
}

export default UBS;
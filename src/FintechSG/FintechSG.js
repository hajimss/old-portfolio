import React from 'react';
import { Segment, Container, Header, Image, Grid } from 'semantic-ui-react';


const Fintech = () => {
    return (
        <div>
            <Segment inverted>
                <Container textAlign="justified" inverted>
                    <Header as="h1" inverted>NUS FintechSG</Header>
                    <Image src="https://fintechlab.nus.edu.sg/wp-content/uploads/sites/8/2020/05/CoBrand-FinTech-lab-2.jpg" size="medium" rounded />
                    <br/>
                        <p>
                            This is the first course that I have embarked on to hone my skills in the field of software development, and more specifically in the Fintech sector where technology is rapidly changing the dynamics of banking. In this space, I will share selected mini-projects that I have worked on during the course.
                        </p>
                    <Header as="h3" inverted>Redesigning the Paylah! App</Header>
                        <Grid>
                            <Grid.Column width={12}>
                                <p>
                                The class was grouped and was tasked to redesign the Paylah! mobile application by using design thinking techniques such as mapping out the customer journey and thinking of multiple personas that might use this application daily. The reconstructed app that we thought of improved the UI of the application by moving the features around based on the expected touchpoints of the users. Apart from that, new features were added to increase the usage and ease the usage of the customer, such as a bill splitting function. A mock app was set up through Figma to showcase the changes. A presentation was done at the end of the first professional certificate course
                                </p>
                            </Grid.Column>
                            <Grid.Column width={4}>
                                <Image src="https://images.squarespace-cdn.com/content/v1/5742b89ab09f956c84a8d3f9/1526526625623-YWIP6CCO8LSMQHUGJVA7/ke17ZwdGBToddI8pDm48kNUzCql9LHhGWP6AfqsWHVdZw-zPPgdn4jUwVcJE1ZvWhcwhEtWJXoshNdA9f1qD7XXuulcRi7K4ZJIrVbS3L9jlnjAmMqdbjtUSk1m_C7nhqW1atvijcKFIEulKXrLFSA/dbspaylah.png" rounded size="small" />
                            </Grid.Column>
                        </Grid>
                    <Header as="h3" inverted>CI-CD Project</Header>
                        <Grid>
                            <Grid.Column width={12}>
                                <p>
                                    Continuous Integration and Continuous Deployment (CI/CD) is an integral part of a programmer's life. The tools that relate to CI/CD are used to ensure a synchronised flow between the development of codes and it's deployment. Here, I explored a few of those tools to get myself in tuned to the daily practices of a developer. I have played out the whole concept by using these tools alongside a small python app that I am working on.
                                    Firstly, I utilised git, a version control system that allows for work on the same set of codes without causing conflicts between the the working code and the main code. Secondly, github actions was used to ensure testing is done on the programme before being deployed. Notifications (telegram and email) were also set for every commit or deployment and it is configured through the yml file and read in github actions. Notifications are essential as it alerts all members of the team who are working on the code of the latest changes.
                                    Lastly, I have incorporated the use of docker with a dockerfile within the project file. This dockerfile, when run, will create a docker image. This means that the deployment process can be easily carried out in different machines despite not having certain required modules (eg. libraries of python such as requests).
                                    Check out my github page to view the CI/CD work and have a look at the individual files used to trigger the implemented CI/CD process (eg. yml file and dockerfile).
                                </p>
                            </Grid.Column>
                            <Grid.Column width={4}>
                                <Image src="https://cdnazure.axonactive.com/wp-content/uploads/2020/05/Hinh-1-2.png" rounded size="medium" />
                            </Grid.Column>
                        </Grid>
                        <Header as="h3" inverted>AlgoTrading with QuantConnect</Header>
                            <Grid>
                                <Grid.Column width={12}>
                                    <p>
                                    In groups, we delved into the world of algotrading by using the QuantConnect platform to experiment with an array of alogrithms using equations built around indicators and applying them to historical data using backtesting. Additionally, fundamental analysis was done on a long list of companies to ensure that the algorithms fit the proper portfolio and ensure that there will be high returns that is accopmanied by high Sharpe ratio.
                                    </p>
                                </Grid.Column>
                                <Grid.Column width={4}>
                                    <Image src="https://backtest-rookies.com/wp-content/uploads/2018/07/QuantConnect-Logo.png" rounded size="small" />
                                </Grid.Column>
                            </Grid>
                </Container>
            </Segment>
        </div>
    );
}

export default Fintech;
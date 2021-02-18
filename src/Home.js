import React from 'react';
import ContactMe from './ContactMe.js';
import { Divider, Segment, Image , Container, Header, Rating, Grid, Card } from 'semantic-ui-react/';
import './Home.css';

const image1 = '/images/my_photo.jpg';

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
                                src='https://lh3.googleusercontent.com/QUCsM3-Z-dm3gRYHCfLHqUMR6NMTMvESWxvedzRuuLvIL2S_Pv7-6MKMdcBSql4D6lw0dzaoXx_jm9kgzdhnZp8pWzIgv6PSUS0mCYdZpArbtAVkKpsW9YLsAXQxWwUGM0H-wdrdNQ22F-3V3_bjBSLcKVnpwZPOklhLw1CN3H0iod_djVpGexTyOBrfN_GoNPDO3GDtadPMfkGuCXUGXyR5-4DGVUilxm2LwafN7POs8PgVQYE8gQhUQmR1-wJm3gaBK4sRKb65vTdKjeTYqTO3nlD7AhRAOBDbdcPrIQOnEK59tGVgvARxOyspKph1ksL1WdvwtQeTEQTkT7i5s0gGhtIbVFuxMdpssvI7xQSPKOmSv3FpPTsT_dBbS3t2cSYEtslz2qHQn71bq03YFA8q0UXdHGk5VMStQ5KEsqHa5C8468C2nn9xJG3_kPZEXX_q-41w0kdK8D11Lp0OfuomJ9s-kFINyQJeiL7Q9Bnxphh4XvjG3eHKMACDG0O8g9cpdQZYz9WlCfokdw_fBikk6osXq8vSiXSVs22M7Xo5f1zjYwy-YsdzgdYVvScWMVy7R9-Nszg9C2JoSc9z1qcyrBkvWHc9DRPfWmM08xe_SUwyr5GNh7z5VLqHLHZ5G_DTBfY6xpZ8_YOrPqyOFFq8ryxaTjnLXNuc0dfgPCdR6wyyrTYt4gRDwN2wbw=w776-h669-no?authuser=0'
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
                        </Card>
                        <Card className='card' centered>
                            <Image 
                                src='https://lh3.googleusercontent.com/hk47h00MZXhH6NW77OLS07cl6mV4uY22aSINCZimNUxm2A3ziVxaHUHGB8qoUcGaSDwZ4vTpxzqEGK492ozTaJ0Kw6yetQtM_T8EcOBekoFYYPdr6B1FMTYZtACkN0XOIKq-wBWBTj6d46NoDnxeF3YfcOLjjjA6ZlppUyoCbZAtzHZ_gQgTR7dZzzFjMwpoARQ6riKRqCu4YVQc1vL32XnzJ-Irqk1pA6XknZbsl74hlHupZM0scdz5pJn0KtAjI9yqU74geSlm67XwhJhzHyaKIlidZJzLIWg3a0SQoF8KfUzhjNZ0pD5prxWwijZGIbUQtn5VFPtm2EMChZ25v-F-ob8hWhz7NjpI02c44DyPdUonJxll_eYfSj6c8MlHSvt5XX7tzPA5Bi5tObP0NFmJab6Vcjn4XURsVjVAUDZR99f53hGYm0GUlRglBwMt9AC-llpHaNUwUBxyj1nsFaJgiSI7DfEmNdAQM_nSgaRc_9wSwp4Vl9c_D6XgtJi71aC7jppiifOOmKHTVLHtld9IiBmxrjQpWjVLrGw4wPk6vHIeSNRcuhun0UzNoE-7RHVWWF3Kt7L3vUs2PobJi2N5M4DGBUlgXJjYVxvRE1ZSgolLOwlft9OMEJ7ilRVxlUxdRPCKWDawh936L3R21jgw9I9EkG5_yn8_EvlQLmLBIR-zsEitn_kZHPI7sA=w954-h716-no?authuser=0'
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
                        </Card>
                        <Card className='card' centered>
                            <Image 
                                src='https://lh3.googleusercontent.com/-N_8mQKebkWnMYFq54P9ndTWYSjaUU6sKWo-J_h0qSNe-dm4K7r9fHNmmG5ueOAZvfeWJVieRRLIa-PA2djQErm0xBqPSV2wOhPTaCzGcdUfVCvIbMyc9VF6B8XDjpyjg7sm64qSD-lMyIem9minUo1vN3IchTy00WtQtzQ0yqUwAv1ZUypCKxEqs38rgd0agAQVwfSbv7VPTbRwjkqjFQzWfG10XvZlSeRjqn0TFLm1jSF0-J9L6El6q_cj0HYoO4vRpbtUYwNK7g8OLG84ZXiLcF231QXr_jlWuKn4alpu3zynuSD4wsXwDzngelE-t_-fhgiJNVB5QvEvWdCYR6r6ElHXmnkEJjFPgunVYOXH7me1TJ_oEmQHXJ6IjGIrTEe47mPThxfz2xA4H0D8GMC6n0izxuTx-cvuL3g7NMN8QCGvY_EYOoRBngYif5x84Aaw7F3qUwHYC2XYqBctPLg6-O5OY2FD5geEjPnKCA865sZsApqfSXVYkTGx2hE96dCPEm9nsO2tXvHbmddtLh36bT6eMqXhWWpJ71kSlOVgRz3aKJIZttR9m5YT4ycRz__u2oxxweSkmAm_6bP8yMTJtXvw711rLx6L_4r3bdgujp7jvj6dsEO6oYLnF5S3AD6Z4FzwSfi_Iulj6dXk4NyUioEDGXmWQVsQJFHq1BCyUFevqnoISyL19xug1w=w747-h756-no?authuser=0'
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
                        </Card>
                    </Grid.Column>
                    <Grid.Column textAlign="center">
                        <p className='title'>Chatboy2020</p>
                        <Card className='card' centered>
                            <Image 
                                src='https://lh3.googleusercontent.com/hJ8M4I-t1SCDDzMzri9CWB0VDNiFArovnWMzGlErIeFDE8PMhkhwadXxg9NIkjyoFZ4Av5VVfAwwgz-f7pc6gwuEAHudJVDHx5e_uXW3ahHKGF_Ey_7TgjJgVAH7n-2eQ_yHMGRRD3ZSCE4QW8lZDyEVhWd9yEe3QkWuSJ8hNBde7Ksti5L6bQyhkgIgLwzKYD-HF88BzOSGsemEalZt5vVRW4v5Lt7Wv0pm-QLFmuM8wY-RQ9cT5KM8SVSXcpuB0370C5-tonmyVCyjOlX3XDB_4orYfi1nUgjiRfvEgX82dcLVY4AARhmS2mZ_E7rVRQ8MiC53csSr4SFe1HZGJAAv7n_LAEIZfYc2O5JoruF8WvRIo4H2kmAZWniMAaNKGFQ6-SoWgcuvt2BUHM6PBNprPIRkn5d5eqhw0QXIy8a_PNiP5WDrIS_oh7dIVLakhnW10q1GdLAUilgiefM7kP7Pw_d5JADZLJ0k5HLQnuylMuizgZUcJ0k0r5e--qIoqc_QONAl9Ah4pvw5kZpqn_4sHWOwbtOfjGY3Zqo8VPKHRY2C5PwCA89ZDCwQ1Wt1sdu6fs9r5UzscGLf99n6iQ23JRFolA5SQLxXMj5WihecNRVss6xFjTE1GHl5npqcKmL37dPMIX_ZluuepUFFRvSZrsn0s7bIIimLv27YuC8syShfkiSr-IuuagSgaA=w606-h710-no?authuser=0'
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
                        </Card>
                    </Grid.Column>
                    <Grid.Column textAlign="center">
                        <p className='title'>Flask</p>
                        <Card centered>
                            <Image 
                                src='https://lh3.googleusercontent.com/yLxPb3yVLKUipKoVJp_0cfUEJMru3Vi2NzsmXSUJXnZqSNABGUOFty_MK5C2WJX2T57t6K3ADYrNuFZLlfwG3qjPdp4IsmKOu6mB1dZ_Wdi-3NxIqn7_QHo8RiLrPWJ4CU0rgPfospKt9MzACZ8IYlZKPVK3EeChlmBZR6PjSXrlxm0nKl8jafVIgUu8gW-_uJ7Z656hPgelT5RdMNZmlpgSq-Wjizoq1GjFmxobiPb-9wEZ94WvHn68dO11V-ZfCluZ0ZDiLp_07McQ3jOt6eviKonCv_wUcrejVfZ6Pk8kaWt5YQG_tYv4vprdNpfTft4yvkCmPR6D2siYIbYWhnrUqM9Q45pH5ErqHtlLsOu4xBEm6bf0u4_ar6yKWdHaSM45Q7mcOHmTGf__GE-CbYY6M82ahwQBTucCZTyk0eaELMbwA7znXpNOkVB-qhwTTjNjKg5IqM2xHRL5vtzrrbr3LFJLklGxkgXwtK7pCh74RYsvyw07BtHxFTfIP3JDKLjl80GWSHmIg5xtHv73zLCLTTpRsnMm7Ipp56LMdy0hc4nr3ApXPE59zL-_VPfWsbUKkzoCZKMP_wZBoRKFAePeeVCWezBNvKCKy0japM1z3kstKZkG-UyDEGjmPW2s4Ma2uUYfYFV9p_Ad9d_VbncyjqtlQik5L4THXRQgw1e0AhgEfvGzgPH6UjUz7A=w727-h499-no?authuser=0'
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
                        </Card>
                    </Grid.Column>
                </Grid.Row>
            </Grid>
        </Segment>
        </div>
        
    );
}

export default Home;
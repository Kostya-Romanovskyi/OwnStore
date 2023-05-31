import AboutList from "../../components/AboutList/AboutList"
import { MainContainer, Title } from "./About.styled"


const About = () => {
    return (
        <main>
            <MainContainer className="app">
                <Title>All my projects</Title>
                <AboutList />
            </MainContainer>
        </main>)
}

export default About
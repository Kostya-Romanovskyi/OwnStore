import Phonebook from '../../assets/About/Phonebook.png'
import IceCream from '../../assets/About/IceCream.png'
import Filmoteka from '../../assets/About/Filmoteka.png'
import Barbershop from '../../assets/About/BarberShop.png'
import WebStudio from '../../assets/About/WebStudio.png'
import { List, Item, Image, InfoWrapp, Name, Description, FlexWrapp, StyledLink } from "./AboutList.styled"

const AboutList = () => {
    return <List>
        <Item>
            <Image src={Phonebook} alt="Phonebook" />
            <InfoWrapp>
                <Name>Phonebook React</Name>
                <Description>[HTML, CSS, JS, REACT, AJAX, REST API, REDUX]</Description>
                <FlexWrapp>
                    <p>Wrote it myself</p>
                    <StyledLink to={'https://kostya-romanovskyi.github.io/phonebook-react/'}>Watch</StyledLink>
                </FlexWrapp>
            </InfoWrapp>
        </Item>
        <Item>
            <Image src={IceCream} alt="IceCream" />
            <InfoWrapp>
                <Name>IceCream</Name>
                <Description>[HTML, Responsive/Adaptive design, SCSS, JS, Parcel]</Description>
                <FlexWrapp>
                    <p>Wrote it myself</p>
                    <StyledLink to={'https://kostya-romanovskyi.github.io/IceCream/'}>Watch</StyledLink>
                </FlexWrapp>
            </InfoWrapp>
        </Item>
        <Item>
            <Image src={Filmoteka} alt="Filmoteka" />
            <InfoWrapp>
                <Name>Filmoteka</Name>
                <Description>[HTML, SCSS, JS, REST API, AJAX, Parcel]</Description>
                <FlexWrapp>
                    <p>Team project</p>
                    <StyledLink to={'https://kostya-romanovskyi.github.io/Filmoteka-team-proj/'}>Watch</StyledLink>
                </FlexWrapp>
            </InfoWrapp>
        </Item>
        <Item>
            <Image src={Barbershop} alt="Barbershop" />
            <InfoWrapp>
                <Name>Barbershop</Name>
                <Description>[HTML, Responsive/Adaptive design, SCSS]</Description>
                <FlexWrapp>
                    <p>Wrote it myself</p>
                    <StyledLink to={'https://kostya-romanovskyi.github.io/BarberShop/'}>Watch</StyledLink>
                </FlexWrapp>
            </InfoWrapp>
        </Item>
        <Item>
            <Image src={WebStudio} alt="WebStudio" />
            <InfoWrapp>
                <Name>WebStudio</Name>
                <Description>[HTML, Responsive/Adaptive design, SCSS, JavaScript]</Description>
                <FlexWrapp>
                    <p>Wrote it myself</p>
                    <StyledLink to={'https://kostya-romanovskyi.github.io/WebStudio/'}>Watch</StyledLink>
                </FlexWrapp>
            </InfoWrapp>
        </Item>
    </List>
}
export default AboutList
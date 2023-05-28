import ruby from '../../assets/ruby.png'

import { SectionStyled, InfoSearchWrapp, RubyImg, InfoWrapp, TitleSearch, InfoSearch, SearchButton } from './SectionSearch.styled'

const SectionSearch = () => {
    return (
        <SectionStyled>
            <InfoSearchWrapp>
                <RubyImg src={ruby} alt="Ruby" />
                <InfoWrapp>
                    <TitleSearch>Search</TitleSearch>
                    <InfoSearch>Click on button and search your favorite movies. <br />Never, finding movies has been so easy</InfoSearch>
                    <SearchButton to={`/search`}>Click me</SearchButton>
                </InfoWrapp>
            </InfoSearchWrapp>

        </SectionStyled>
    )
}
export default SectionSearch
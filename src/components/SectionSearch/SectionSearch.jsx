import ruby from '../../assets/ruby.png'
import { InfoSearchWrapp, RubyImg, InfoWrapp, TitleSearch, InfoSearch, SearchButton } from './SectionSearch.styled'

const SectionSearch = () => {
    return (
        <section>
            <InfoSearchWrapp>
                <RubyImg src={ruby} alt="Ruby" />
                <InfoWrapp>
                    <TitleSearch>Search</TitleSearch>
                    <InfoSearch>Click on button and search your favorite movies. <br />Never, finding movies has been so easy</InfoSearch>
                    <SearchButton type="button">Click me</SearchButton>
                </InfoWrapp>
            </InfoSearchWrapp>

        </section>
    )
}
export default SectionSearch
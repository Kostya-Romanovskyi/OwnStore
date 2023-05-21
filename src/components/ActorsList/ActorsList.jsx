import { useSelector } from "react-redux"
import { castById } from "../../Redux/Slices/CastById"
import { List, Item, Photo, Name, TextWrapp, Duty, Popularity, Character } from "./ActorsList.styled"


const ActorsList = () => {

    const actorsListSel = useSelector(castById)
    console.log(actorsListSel)
    return (<List>
        {actorsListSel.cast && actorsListSel.cast.map(({ id, name, profile_path, character, known_for_department, popularity }) =>
        (
            <Item key={id}>
                <Photo src={`https://image.tmdb.org/t/p/w500${profile_path}`} alt={name} />
                <Name>{name}</Name>
                <TextWrapp>
                    <Duty>Duty: {known_for_department}</Duty>
                    <Popularity>Popularity: {popularity}</Popularity>
                </TextWrapp>
                <Character>Character: {character}</Character>
            </Item>
        )

        )}
    </List>)
}
export default ActorsList
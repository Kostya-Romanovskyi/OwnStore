import { useSelector } from "react-redux"
import { castById } from "../../Redux/Slices/CastById"
import ErrorPhoto from '../../assets/ErrorPoster.jpg'
import { List, Item, Photo, Name, TextWrapp, Duty, Popularity, Character, EmptyCast } from "./ActorsList.styled"

const ActorsList = () => {
    const actorsListSel = useSelector(castById)
    console.log(actorsListSel.cast)

    const truncateString = (str, maxLength) => {
        if (str.length > maxLength) {
            return str.substring(0, maxLength) + "...";
        } else {
            return str;
        }
    }

    return actorsListSel.cast && actorsListSel.cast.length !== 0 ?
        <List>
            {actorsListSel.cast && actorsListSel.cast.map(({ id, name, profile_path, character, known_for_department, popularity }) =>
            (
                <Item key={id}>
                    <Photo src={profile_path !== null ? `https://image.tmdb.org/t/p/w500${profile_path}` : ErrorPhoto} alt={name} />
                    <Name>{truncateString(name, 10)}</Name>
                    <TextWrapp>
                        <Duty>Duty:<br />{known_for_department}</Duty>
                        <Popularity>Popularity:<br />{popularity.toFixed(1)}</Popularity>
                    </TextWrapp>
                    <Character>Character: {character}</Character>
                </Item>
            )

            )}
        </List>
        :
        <EmptyCast>We haven`t actors of this movie</EmptyCast>

}
export default ActorsList

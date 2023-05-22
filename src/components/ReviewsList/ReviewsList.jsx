import { useSelector } from "react-redux";
import moment from 'moment';
import { reviewsById } from "../../Redux/Slices/ReviewsById";
import Avatar404 from '../../assets/Avatar404.jpg'
import { List, Item, Avatar, Nickname, Date, Content, EmptyReviews } from "./ReviewsList.styled";


const ReviewsList = () => {
    const reviewsListSel = useSelector(reviewsById)
    console.log(reviewsListSel)

    const formatDate = (timestamp) => {
        const date = moment(timestamp);
        return date.format('D MMMM YYYY, HH:mm A');
    };

    const avatarString = (url) => {
        if (url[0] === '/') {
            return url.slice(1);
        }
        return url;
    }

    // Якщо аватар не = null показувати стандартний юрл чи заглушку,
    // якщо довжина юрл більше ніж 33, показувати оброблену строку чи заглушку
    //if avatar_path !== null show https://image.tmdb.org/t/p/w500${avatar_path},
    // if avatar_path.length > 33 show avatarString(avatar_path) else show Avatar 404

    return reviewsListSel.results && reviewsListSel.results.length !== 0 ?
        <List>
            {reviewsListSel.results && reviewsListSel.results.map(({ author_details: { username, avatar_path }, content, created_at, id }) =>
                <Item key={id}>
                    <div>

                        <Avatar src={avatar_path !== null ? (avatar_path.length < 33 ? `https://image.tmdb.org/t/p/w500${avatar_path}` :
                            (avatar_path.length > 33 ? `${avatarString(avatar_path)}` : Avatar404)) :
                            Avatar404} alt={username} />
                        <Nickname>{username}</Nickname>
                        <Date>{formatDate(created_at)}</Date>
                    </div>

                    <Content>
                        {content}
                    </Content>
                </Item>)}
        </List>
        :
        <EmptyReviews>We havent Reviews for this movie</EmptyReviews>
}

export default ReviewsList;

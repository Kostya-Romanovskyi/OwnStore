import { useDispatch } from "react-redux";
import { auth, provider } from "./FirebaseConfig";
import { signInWithPopup } from "firebase/auth";
import { logIn } from "../Slices/AuthSlice";
import { AuthLogIn } from "./SignIn.styled";

const SignIn = () => {
    const dispatch = useDispatch();

    const handleClick = () => {
        signInWithPopup(auth, provider).then((data) => {
            dispatch(logIn(data.user));

            localStorage.setItem('auth', JSON.stringify({ name: data.user.displayName, uid: data.user.uid, email: data.user.email }))

            const storedAuthData = localStorage.getItem("auth");

            if (storedAuthData) {
                const { name, email, uid } = JSON.parse(storedAuthData);

                dispatch(logIn({ name, email, uid }));
            }
        });
    };

    return <AuthLogIn onClick={handleClick}>Sign In with Google</AuthLogIn>;
};

export default SignIn;

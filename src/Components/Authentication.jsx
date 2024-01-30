import SignIn from './SignIn'
import SignUp from './SignUp'
import "../SCSS/Authentication.styles.scss";

const Authentication = () => {
    return (
        <div className='authentication-container'>
            <SignIn />
            <SignUp />
        </div>
    )
}

export default Authentication
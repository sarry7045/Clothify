import { Outlet, Link } from 'react-router-dom';
import "../SCSS/Navbar.styles.scss"

const Navigation = () => {
    return (
        <>
            <div className='navigation'>
                <Link className='logo-container' to='/'>
                    <h2 className='logo'>Clothify</h2>
                </Link>
                <div className='nav-links-container'>
                    <Link className='nav-link' to='/shop'>
                        SHOP
                    </Link>
                    <Link className='nav-link' to='/authenticate'>
                        SIGN IN
                    </Link>
                </div>
            </div>
            <Outlet />
        </>
    );
};

export default Navigation;
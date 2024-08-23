import { useContext } from 'react';
import './AuthLayout.css'
import { AuthenticationContext } from '../../../Context/AuthenticationContext/AuthenticationContext';
function AuthLayout({children}) {
    return (  
        <div className="dark-background">
            <div className='auth-container' >
                {children}
            </div>
        </div>
    );
}

export default AuthLayout;
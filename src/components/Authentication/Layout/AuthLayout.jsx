import './AuthLayout.css'
function AuthLayout({children}) {
    return (  
        <div className="dark-background">
            {children}
        </div>
    );
}

export default AuthLayout;
import './App.css';
import ThemeContextComponent from './Context/ThemeContext/ThemeContext';

import AuthenticationComponent from './Context/AuthenticationContext/AuthenticationContext';
import AuthContextComponent  from 'Context/AuthContext/AuthContext';
import MyRoutes from 'Routes';


function App() {
 
  return (
    <div className="App">
      <AuthContextComponent>
        <ThemeContextComponent>
          <AuthenticationComponent>

            <MyRoutes/>

          </AuthenticationComponent>
          
        </ThemeContextComponent>
      </AuthContextComponent>
    </div>
  );
}

export default App;

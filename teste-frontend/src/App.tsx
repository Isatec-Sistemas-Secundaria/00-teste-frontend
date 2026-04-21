import './App.css'
import {
  BrowserRouter, 
  Routes, 
  Route,
} from "react-router-dom";
import { LoginPage } from './pages/login/login_page';
import { ThemeProvider } from './context/ThemeContext';

function App() {

  return (
    <BrowserRouter>
      <ThemeProvider>
        <Routes>
          <Route
            path="/"
            element={
              <LoginPage/>
            }
            />
        </Routes>
      </ThemeProvider>
    </BrowserRouter>
  )
}

export default App
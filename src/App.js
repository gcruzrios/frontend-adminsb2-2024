
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import Login from './pages/Login';
import Register from './pages/Register';
import NotFound from './pages/Error404';
function App() {
  return (
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} exact>
            {" "}
          </Route>
          <Route path="/index" element={< Index />} exact>
            {" "}
          </Route>
          <Route path="/register" element={< Register />} exact>
            {" "}
          </Route>

        

          <Route path="*" element={<NotFound />} />
        </Routes>
        
      </BrowserRouter>
  );
}

export default App;

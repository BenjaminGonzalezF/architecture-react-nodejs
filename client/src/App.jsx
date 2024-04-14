import "./App.css";
import Home from "./pages/Home";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import usersInterceptor from "./interceptors/users.interceptors";
usersInterceptor();
function App() {
  return (
    <>
      <Router>
          <Header />
          <main>
        <Routes>
            <Route path="/home" element={<Home />} />
        </Routes>
          </main>
      </Router>
    </>
  );
}

export default App;

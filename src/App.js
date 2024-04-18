import Header from "./components/Header";
import { Route, Routes } from "react-router-dom";
import { createContext, useState } from "react";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Dashbord from "./components/Dashbord";
import Profile from "./components/Profile";
import Home from "./components/Home";

const Appstate = createContext();

function App() {
  const [login, setLogin] = useState(false);
  const [userName, setUserName] = useState("");

  return (
    <Appstate.Provider value={{ login, userName, setLogin, setUserName }}>
      <div className="App relative">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/dashbord" element={<Dashbord />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </div>
    </Appstate.Provider>
  );
}

export default App;
export { Appstate };

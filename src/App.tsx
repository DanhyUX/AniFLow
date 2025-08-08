import { BrowserRouter, Route, Routes } from "react-router";
import Home from "./Pages/home";
import OnepiecePage from "./Pages/onepiece";
import AttackOnTitans from "./Pages/attack";
import DemonSlayer from "./Pages/kimetsu";
import Login from "./Pages/login";
import Signup from "./Pages/signup";
import Profile from "./Pages/profile"

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="onepiece" element={<OnepiecePage />} />
          <Route path="attack" element={<AttackOnTitans />} />
          <Route path="kimetsu" element={<DemonSlayer />} />
          <Route path="login" element={<Login />} />
          <Route path="signup" element={<Signup />} />
          <Route path="profile" element={<Profile />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

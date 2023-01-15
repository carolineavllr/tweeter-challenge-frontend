import { useState } from "react";
import { Register } from "../components/login/Register";
import { SignIn } from "../components/login/SignIn";
import img from "../imgs/login.jpg";
import "../components/login/login.css";

export const Login = () => {
  const [user, setUser] = useState();
  const [password, setPassword] = useState();

  const [position, setPosition] = useState("right");

  return (
    <div className="w100">
      <div
        style={{
          height: "100vh",
        }}
        className="flex relative items-center pa4"
      >
        <SignIn
          user={setUser}
          password={setPassword}
          setPosition={setPosition}
        />
        <Register
          user={setUser}
          password={setPassword}
          setPosition={setPosition}
        />
        <div className={`bg-blue absolute w-50 h-100 ${position}`}>
          <div
            style={{
              width: "100%",
              height: "100%",
              background: "green",
              backgroundPosition: "center left",
              WebkitMaskBoxImage:
                "linear-gradient(to top, transparent 0%, black 100%)",
              backgroundImage: "url(" + img + ")",
            }}
          ></div>
        </div>
      </div>
    </div>
  );
};

// const getUser = () =>
//   fetch("http://192.168.1.2:3000/user", {
//     method: "POST",
//     body: "",
//   });

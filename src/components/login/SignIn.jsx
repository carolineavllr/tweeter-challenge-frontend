import { ArrowForward } from "@mui/icons-material";
import { Link } from "react-router-dom";

export const SignIn = ({ password, user, setPosition }) => (
  <form action="" className="w-50 mr5">
    <div
      style={{
        gap: "10px",
        margin: "auto",
        maxWidth: "500px",
      }}
      className="flex flex-column"
    >
      <div className="f2 fw6">Welcome back!</div>
      <div className="f4 gray mb4">Please enter your details.</div>
      <label className="f5 mt3" htmlFor="user">
        Username
      </label>
      <input className="pa3 br3 b--moon-gray ba f6" type="text" value={user} />
      <label className="f5 mt3" htmlFor="password">
        Password
      </label>
      <input
        className="pa3 br3 b--moon-gray ba f6"
        type="password"
        value={password}
      />
      <button type="submit" className="mt3 white bg-blue bn br3 pa3 f5 pointer">
        Sign up
      </button>
      <Link
        to="/login/register"
        className="flex items-center f6 mt2 gray underline pointer"
        onClick={() => setPosition("left")}
      >
        I don't have an account yet
        <ArrowForward className="ml1" fontSize="small" />
      </Link>
    </div>
  </form>
);

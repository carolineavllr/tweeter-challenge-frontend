import { ArrowBack } from "@mui/icons-material";
import { Link } from "react-router-dom";

export const Register = ({ password, user, setPosition }) => (
  <form action="" className="w-50 ml5">
    <div
      style={{
        gap: "10px",
        margin: "auto",
        maxWidth: "500px",
      }}
      className="flex flex-column"
    >
      <div className="f2 fw6">Register to get started</div>
      <div className="f4 gray mb4">Join Tweeter right now!</div>
      <label className="f5 mt3" htmlFor="name">
        Name
      </label>
      <input className="pa3 br3 b--moon-gray ba f6" type="text" />
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
      <Link to="/login/signin" className="flex items-center f6 mt2 gray underline pointer" onClick={() => setPosition('right')}>
        <ArrowBack className="mr1" fontSize="small" /> I already have an account
      </Link>
    </div>
  </form>
);

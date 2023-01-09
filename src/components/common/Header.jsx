import { Link } from "react-router-dom";

export const Header = ({ image, name }) => (
  <div className="header">
    <div className="flex ph6 items-center">
      <h1 className="f5 w-20 blue">
        Tweeter
      </h1>
      <ul className="menus pa0 w-60 flex ma0 justify-center">
        <Link to={'/'} className="link pv4 f5 mh2 list blue bb bw1 b--blue">Home</Link>
        <li className="link pv4 f5 mh2 list gray">Explore</li>
        <li className="link pv4 f5 mh2 list gray">Bookmarks</li>
      </ul>
      <div className="account w-20 flex items-center">
        <img className="w3 br3 mr3" src={image} alt={name} />
        <div className="f5 fw5 nowrap">
          {name}
        </div>
      </div>
    </div>
  </div>
)
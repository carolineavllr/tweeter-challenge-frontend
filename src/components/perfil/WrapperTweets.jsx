import { Tweet } from "../common/Tweets";

export const WrapperTweets = ({ profile }) => (
  <div className="w100 bg-black-05 pb4">
    <div
      className="flex center pt4"
      style={{
        gap: "2rem",
        maxWidth: "1400px",
      }}
    >
      <div className="w-25 bg-white shadow-4 br3 pv2 f5">
        <div className="b blue ph4 pv2 bl bw1">Tweets</div>
        <div className="ph4 pv2 gray pointer">Tweets & replies</div>
        <div className="ph4 pv2 gray pointer">Media</div>
        <div className="ph4 pv2 gray pointer">Likes</div>
      </div>
      <div className="w-75">
        <Tweet profile={profile} />
      </div>
    </div>
  </div>
);

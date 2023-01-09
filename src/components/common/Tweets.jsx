import { ActionsTweet } from "./tweet/Actions";

export const Tweet = ({ profile }) => (
  <div className="bg-white pa3 shadow-4 br3 flex flex-column">
    <div className="flex">
      <div
        className="avatar flex relative br3 overflow-hidden mr2"
        style={{
          minWidth: "3.5rem",
          width: "3.5rem",
          height: "3.5rem",
        }}
      >
        <img
          src={profile?.avatar}
          alt="Cover img"
          className="w-100 h-100 absolute z-0"
          style={{ objectFit: "cover" }}
        />
      </div>
      <div className="flex flex-column">
        <div className="f5 fw5 mb1">{profile?.name}</div>
        <div className="gray f7">09 January at 10:25</div>
      </div>
    </div>
    <div className="flex flex-column mt3 f5">
      Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quasi neque
      pariatur veniam quisquam facilis possimus illo iusto et, inventore
      mollitia qui, laboriosam doloremque sint suscipit? Corporis rerum
      voluptatibus amet laboriosam.
      <img className="w-100 br3 mt3" src="https://picsum.photos/1400/400" alt="Tweet" />
    </div>
    <ActionsTweet/>
  </div>
);

export const Profile = ({ profile }) => (
  <div className="w100 bg-black-05">
    <div className="w-100 image vh-25 overflow-hidden relative">
      <img
        src={profile?.coverImage}
        alt="Cover img"
        className="w-100 h-100 absolute z-0"
        style={{ objectFit: "cover" }}
      />
    </div>
    <div
      className="w-80 center bg-white justify-between flex z-1 relative pa4 br3 shadow-4"
      style={{
        gap: "20px",
        marginTop: "-10vh",
        maxWidth: "1400px",
      }}
    >
      <div
        className="avatar flex relative br2 overflow-hidden ba bw2 b--white"
        style={{
          marginTop: "-10vh",
          minWidth: "10rem",
          width: "10rem",
          height: "10rem",
        }}
      >
        <img
          src={profile?.avatar}
          alt="Cover img"
          className="w-100 h-100 absolute z-0"
          style={{ objectFit: "cover" }}
        />
      </div>
      <div className="description w-100">
        <div
          className="flex justify-between items-center"
          style={{
            gap: "40px",
          }}
        >
          <div className="f3 b nowrap">{profile?.name}</div>
          <div
            className="flex w-100 f6"
            style={{
              gap: "20px",
            }}
          >
            <div className="flex">
              <div className="b mr1">1</div>
              <div className="gray">Following</div>
            </div>
            <div className="flex">
              <div className="b mr1">24</div>
              <div className="gray">Followers</div>
            </div>
          </div>
          <button className="white bg-blue fw3 br3 ph4 pv2 bw0 pointer f6">
            Follow
          </button>
        </div>
        <div className="mt3 gray f4 w-50">{profile?.description}</div>
      </div>
    </div>
  </div>
);

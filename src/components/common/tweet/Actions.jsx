import { Autorenew, BookmarkBorder, FavoriteBorder } from "@mui/icons-material";
import ModeCommentOutlinedIcon from "@mui/icons-material/ModeCommentOutlined";

export const ActionsTweet = () => (
  <div className="flex bt bb mt3 b--light-gray pa3 justify-center">
    <div className="flex f6 items-center mh2 w-25 justify-center pointer">
      <ModeCommentOutlinedIcon fontSize="small" className="mr2" />
      Comments
    </div>
    <div className="flex f6 items-center mh2 w-25 justify-center pointer">
      <Autorenew fontSize="small" className="mr2" />
      Retweets
    </div>
    <div className="flex f6 items-center mh2 w-25 justify-center pointer">
      <FavoriteBorder fontSize="small" className="mr2" />
      Likes
    </div>
    <div className="flex f6 items-center mh2 w-25 justify-center pointer">
      <BookmarkBorder fontSize="small" className="mr2" />
      Saved
    </div>
  </div>
);

import PropTypes from "prop-types";
import ReactPlayer from "react-player";

const VideoPlayer = ({ url }) => {
  return (
    <div className="relative aspect-video w-full">
      <ReactPlayer
        url={url}
        className="absolute inset-0"
        width="100%"
        height="100%"
        controls
      />
    </div>
  );
};

VideoPlayer.propTypes = {
  url: PropTypes.string
}

export default VideoPlayer;

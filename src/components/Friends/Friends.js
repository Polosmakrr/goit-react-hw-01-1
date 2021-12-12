import PropTypes from 'prop-types';
import '../Friends/Friends.css';

const Friends = ({ avatarImg, name, isOnline }) => {
  return (
    <>
      <span className="status"></span>
      <img
        className="friend-avatar"
        src={avatarImg}
        alt="User avatar"
        width="48"
      />
      <p className="name">{name}</p>
    </>
  );
};

Friends.protoType = {
  avatarImg: PropTypes.string,
  name: PropTypes.string,
};
export default Friends;

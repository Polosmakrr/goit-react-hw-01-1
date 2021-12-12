import PropTypes from 'prop-types';

const Friends = ({ avatarImg, name, isOnline }) => {
  return (
    <>
      <span class="status"></span>
      <img class="avatar" src={avatarImg} alt="User avatar" width="48" />
      <p class="name">{name}</p>
    </>
  );
};

Friends.protoType = {
  avatarImg: PropTypes.string,
  name: PropTypes.string,
};
export default Friends;

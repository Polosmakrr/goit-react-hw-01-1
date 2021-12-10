import PropTypes from 'prop-types';

const Friends = ({ avatarImg, name, isOnline }) => {
  return (
    <li class={isOnline}>
      <span class="status"></span>
      <img class="avatar" src={avatarImg} alt="User avatar" width="48" />
      <p class="name">{name}</p>
    </li>
  );
};

Friends.protoType = {
  avatarImg: PropTypes.string,
  name: PropTypes.string,
};
export default Friends;

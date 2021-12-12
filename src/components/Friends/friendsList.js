import Friends from './Friends';

function FriendsList({ friends }) {
  return (
    <ul className="friend-list">
      {friends.map(friend => (
        <li key={friend.id} className="friend-item">
          {friend.isOnline ? (
            <span className="online">&bull;</span>
          ) : (
            <span className="offline">&bull;</span>
          )}
          <Friends
            avatarImg={friend.avatar}
            name={friend.name}
            isOnline={friend.isOnline}
          />
        </li>
      ))}
    </ul>
  );
}

export default FriendsList;

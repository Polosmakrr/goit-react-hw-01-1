import Friends from './Friends';

function FriendsList({ friends }) {
  return (
    <ul class="friend-list">
      {friends.map(friend => (
        <li key={friend.id} class={friend.isOnline}>
          {friend.isOnline ? <span>Online</span> : <span>Offline</span>}
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

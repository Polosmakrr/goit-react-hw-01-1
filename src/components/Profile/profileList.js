import Profile from './Profile';

function ProfileList({ items }) {
  return (
    <ul className="profile">
      {items.map(item => (
        <li key={item.id} className="profile-box">
          <Profile
            username={item.username}
            tag={item.tag}
            location={item.location}
            avatar={item.avatar}
            stats={item.stats}
          />
        </li>
      ))}
    </ul>
  );
}

export default ProfileList;

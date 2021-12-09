import ProfileList from './components/profileList';
import Users from './users.json';

export default function App() {
  return (
    <div>
      <h1>Home Work React 1</h1>
      <section>
        <h2>Profile</h2>
        <ProfileList items={Users} />
      </section>
    </div>
  );
}

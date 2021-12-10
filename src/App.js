import ProfileList from './components/profileList';
import Users from './users.json';
import StatisticList from './components/statisticList';
import statisticData from './statisticData.json';
import FriendsList from './components/friendsList';
import friends from './friends.json';
import TransactionsTable from './components/transactionsTable';
import transactions from './transactions.json';

export default function App() {
  return (
    <div>
      <h1>Home Work React 1</h1>
      <section class="profile">
        <h2 class="title">Profile</h2>
        <ProfileList items={Users} />
      </section>
      <section class="statistics">
        <StatisticList title="Upload stats" items={statisticData} />;
      </section>
      <section class="friends">
        <h2 class="title">Friends</h2>
        <FriendsList friends={friends} />
      </section>
      <section class="transactions">
        <h2 class="title">Transactions</h2>
        <TransactionsTable transactions={transactions} />
      </section>
    </div>
  );
}

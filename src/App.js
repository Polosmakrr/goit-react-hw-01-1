import ProfileList from './components/Profile/profileList';
import Users from './users.json';
import StatisticList from './components/Statistic/statisticList';
import statisticData from './statisticData.json';
import FriendsList from './components/Friends/friendsList';
import friends from './friends.json';
import TransactionsTable from './components/Transaction/transactionsTable';
import transactions from './transactions.json';

export default function App() {
  return (
    <div>
      <h1>Home Work React 1</h1>
      <section className="section-profile">
        <h2 className="title">Profile</h2>
        <ProfileList items={Users} />
      </section>
      <section className="section-statistics">
        <StatisticList title="Upload stats" items={statisticData} />;
      </section>
      <section className="section-friends">
        <h2 className="title">Friends</h2>
        <FriendsList friends={friends} />
      </section>
      <section className="section-transactions">
        <h2 className="title">Transactions</h2>
        <TransactionsTable transactions={transactions} />
      </section>
    </div>
  );
}

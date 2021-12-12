import PropTypes from 'prop-types';
import '../Statistic/Statistic.css';

function StatisticList({ items, title }) {
  return (
    <div className="statistics-box">
      {title && <h2 className="stat-title">{title}</h2>}
      <ul className="stat-list">
        {items.map(item => (
          <li className="stat-item" key={item.id}>
            <span className="label"> {item.label} </span>
            <span className="percentage"> {item.percentage} </span>
          </li>
        ))}
      </ul>
    </div>
  );
}

StatisticList.prototype = {
  title: PropTypes.string,
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      label: PropTypes.string,
      percentage: PropTypes.number,
    }),
  ),
};

export default StatisticList;

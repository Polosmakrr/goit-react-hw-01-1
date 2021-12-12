import PropTypes from 'prop-types';

function StatisticList({ items, title }) {
  return (
    <div>
      {title && <h2 class="title">{title}</h2>}
      <ul class="stat-list">
        {items.map(item => (
          <li class="item" key={item.id}>
            <span class="label"> {item.label} </span>
            <span class="percentage"> {item.percentage} </span>
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

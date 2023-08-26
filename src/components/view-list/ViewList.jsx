import './ViewList.css';
import Button from "../button/Button";

const ViewList = ({ props }) => {
  return (
    <ul className="view-list">
      {props.map(listItem => (
        <li className="list__item-view">
          <div className="listItem__item">
          <div className="listItem__header">
            <h4 className="item-title">
              {listItem.name}
            </h4>
            <p className="item__header-color">
              {listItem.color}
            </p>
          </div>
          <div className="list-item-image">
            <img src={listItem.img} className="list-item-img" />
          </div>
          <div className="list-item__price">
            <p className="list-price-content">
              {listItem.price}
            </p>
            <Button/>
          </div>
        </div>
        </li>
      ))}
    </ul>
  );
}

export default ViewList;
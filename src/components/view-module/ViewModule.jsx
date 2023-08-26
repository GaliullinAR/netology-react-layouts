import Button from '../button/Button';
import './ViewModule.css';

const ViewModule = ({ props }) => {
  console.log(props);
  return (
    <div className="view-module">
      {props.map(cart => (
        <div className="card__item">
          <div className="item__header">
            <h4 className="item-title">
              {cart.name}
            </h4>
            <p className="item__header-color">
              {cart.color}
            </p>
          </div>
          <div className="item-image">
            <img src={cart.img} className="item-img" />
          </div>
          <div className="item__price">
            <p className="price-content">
              {cart.price}
            </p>
            <Button/>
          </div>
        </div>
      ))}
    </div>
  );
}

export default ViewModule;
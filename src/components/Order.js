import { FaTrash } from "react-icons/fa";

function Order({ item, onDelete }) {
  return (
    <div className="item">
      <img src={"./img/" + item.img} alt="pictures" />
      <div className="item-row">
        <h2>{item.title}</h2>
        <p>{item.price}$</p>
      </div>
      <FaTrash className="delete-icon" onClick={() => onDelete(item.id)} />
    </div>
  );
}

export default Order;

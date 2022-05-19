function Item({ item, onAdd, onShow }) {
  return (
    <div className="item">
      <img src={"./img/" + item.img} onClick={() => onShow(item)} alt="pictures" />
      <h2>{item.title}</h2>
      <p>{item.desc}</p>
      <b>{item.price}$</b>
      <div className="add-to-cart" onClick={() => onAdd(item)}>
        +
      </div>
    </div>
  );
}

export default Item;

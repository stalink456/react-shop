import Item from "./Item";

function Items({ items, onAdd, onShow }) {
  return (
    <main>
      {items.map((item) => (
        <Item item={item} key={item.id} onAdd={onAdd} onShow={onShow} />
      ))}
    </main>
  );
}

export default Items;

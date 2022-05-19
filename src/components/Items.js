import Item from "./Item";

function Items({ items, onAdd }) {
  return (
    <main>
      {items.map((item) => (
       <Item item={item} key={item.id} onAdd={onAdd}/>
      ))}
    </main>
  );
}

export default Items;

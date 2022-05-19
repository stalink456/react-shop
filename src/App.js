import Header from "./components/Header";
import Footer from "./components/Footer";
import { useState } from "react";
import Items from "./components/Items";
import Categories from "./components/Categories";
import ShowFullItem from "./components/ShowFullItem";

function App() {
  // eslint-disable-next-line
  const [items, setItems] = useState([
    {
      id: 1,
      title: "Стул серый",
      img: "chair.jpeg",
      desc: "Just chair",
      category: "chairs",
      price: "49.99",
    },
    {
      id: 2,
      title: "Стол",
      img: "table.jpeg",
      desc: "Just table",
      category: "tables",
      price: "9.99",
    },
  ]);
  const [orders, setOrders] = useState([]);
  const [currentItems, setCurrentItems] = useState(items);
  const [showFullITem, setShowFullItem] = useState(false);
  const [fullItem, setFullItem] = useState({});

  const addToOrder = (item) => {
    let isInArray = false;
    orders.forEach((value) => {
      if (value.id === item.id) {
        isInArray = true;
      }
    });
    if (!isInArray) {
      setOrders([...orders, item]);
    }
  };

  const deleteOrder = (id) => {
    setOrders(
      orders.filter((value) => {
        if (value.id !== id) {
          return value;
        }
        return false;
      })
    );
  };

  const chooseCategory = (category) => {
    if (category === "all") {
      setCurrentItems(items);
      return;
    }
    setCurrentItems(items.filter((value) => value.category === category));
  };

  const onShowItem = (item) => {
    setFullItem(item);
    setShowFullItem(!showFullITem);
  };

  return (
    <div className="wrapper">
      <Header orders={orders} onDelete={deleteOrder} />
      <Categories onChoose={chooseCategory} />
      <Items onShow={onShowItem} items={currentItems} onAdd={addToOrder} />
      {showFullITem && <ShowFullItem item={fullItem} onAdd={addToOrder} onShow={onShowItem}/>}
      <Footer />
    </div>
  );
}

export default App;

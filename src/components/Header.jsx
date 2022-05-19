import { useState } from "react";
import { FaShoppingCart } from "react-icons/fa";
import Order from "./Order";

function Header({ orders, onDelete }) {
  const [cartOpen, setCartOpen] = useState(false);

  const showOrders = (orders) => {
    let sum = 0;
    orders.forEach((element) => {
      sum += Number(element.price);
    });

    return (
      <div>
        {orders.map((element) => (
          <Order onDelete={onDelete} key={element.id} item={element} />
        ))}
        <p className="sum">Сумма: {sum.toFixed(2)}$</p>
      </div>
    );
  };

  return (
    <header>
      <div className="nav">
        <span className="logo">House Staff</span>
        <div className="about">
          <FaShoppingCart
            onClick={() => setCartOpen(!cartOpen)}
            className={`shop-cart-button ${cartOpen && "active"}`}
          />
          {cartOpen && (
            <div className="shop-cart">
              {orders.length > 0 ? (
                showOrders(orders)
              ) : (
                <div className="empty">
                  <h2 style={{ marginBottom: "20px" }}>Товаров нет</h2>
                </div>
              )}
            </div>
          )}
          <p>О нас</p>
          <p>Контакты</p>
          <p>Личный кабинет</p>
        </div>
      </div>
      <div className="presentation"></div>
    </header>
  );
}

export default Header;

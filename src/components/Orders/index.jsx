import Header from "../Header";

const Orders = () => {
  return (
    <>
      <Header />
      <h2 className="cart-heading">Your orders' list: is empty</h2>
      <h1 className="empty-cart-icon">
        <i class="fas fa-shopping-cart"></i>
      </h1>
    </>
  );
};

export default Orders;

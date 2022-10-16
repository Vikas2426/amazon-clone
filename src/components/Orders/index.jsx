import Header from "../Header";
import banner from "../../assets/cart-banner.jpg";

const Orders = () => {
  return (
    <>
      <Header />
      <img className="cart-banner" src={banner} alt="cart-banner" />
      <h2 className="cart-heading">Your orders' list: is empty</h2>
      <h1 className="empty-cart-icon">
        <i class="fas fa-shopping-cart"></i>
      </h1>
    </>
  );
};

export default Orders;

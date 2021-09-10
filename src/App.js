import { useSelector } from 'react-redux';

import Cart from './components/Cart/Cart';
import Layout from './components/Layout/Layout';
import Products from './components/Shop/Products';
import ShowDetail from './components/Layout/ShowDetail';

function App() {
  const showCart = useSelector((state) => state.ui.cartIsVisible);
  const showCheck = useSelector((state) => state.cart.totalQuantity);
  return (
    <Layout>
      {showCart && <Cart />}
      {showCheck > 0 ? (<p style={{color: "white"}} align={"center"}> Enjoy Shopping </p>): (<ShowDetail/>)}
      <Products />
    </Layout>
  );
}

export default App;
import { Route, Routes } from "react-router-dom";
import MobileContainer from "./ui/MobileContainer";
import BottomNav from "./ui/Nav/BottomNav";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import Offers from "./pages/Offers";
import Draws from "./pages/Draws";
import Tickets from "./pages/Tickets";
import Menu from "./pages/Menu";
import Cart from "./pages/Cart";

function App() {
  return (
    <div className='max-h-[100dvh] w-full overflow-y-scroll scrollbar-hide'>
      <Routes>
        <Route path='/' element={<MobileContainer />}>
          <Route index element={<Home />} />
          <Route path='/offers' element={<Offers />} />
          <Route path='/draws' element={<Draws />} />
          <Route path='/tickets' element={<Tickets />} />
          <Route path='/menu' element={<Menu />} />
          <Route path='/cart' element={<Cart />} />
          <Route path='*' element={<NotFound />} />
        </Route>
      </Routes>
      <BottomNav />
    </div>
  );
}

export default App;

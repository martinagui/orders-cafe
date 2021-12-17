import React, { useRef } from "react";
import { menuItemsData } from "components/common/Menu/data";
import Menu from "components/common/Menu";
import Banner from "../../components/Home/Banner";
import Footer from "components/common/Footer";
import CartCountButton from "components/common/CartCountButton";
const Home = () => {
  const menuRef = useRef();

  const handleScrollMenu = () => {
    menuRef.current.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <div>
      <Banner handleScrollMenu={handleScrollMenu} />
      <Menu list={menuItemsData} ref={menuRef} />
      <Footer />
      <CartCountButton cartCount={0} />
    </div>
  );
};

export default Home;

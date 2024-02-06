import Avatar from "../components/Menu/Avatar";
import Contact from "../components/Menu/Contact";
import MenuList from "../components/Menu/MenuList";
import QuestionBanner from "../components/Menu/QuestionBanner";

function Menu() {
  return (
    <div className='min-h-[100dvh] relative'>
      <div className='mt-12'>
        <Avatar />
        <QuestionBanner />
        <MenuList />
        <Contact />
      </div>
    </div>
  );
}

export default Menu;

import Banner from "./components/Banner";
import Favourite from "./components/Favourite";

import What from "./components/What";

function App() {
  const navigation = [
    { title: "Home", link: "/" },
    { title: "About us", link: "/aboutus" },
    { title: "Instructors", link: "/instructors" },
    { title: "Students", link: "/students" },
    { title: "Pages", link: "/pages" },
    { title: "Blog", link: "/blog" },
    { title: "Contact Us", link: "/contact Us" },
  ];

  return (
    <>
      <main className="bg-gradient-to-r from-[#fde3e1] to-[#e5f3ff]">
        <div className="max-w-screen-xl mx-auto flex items-center justify-between">
          <div className="">logo</div>
          <div className="">
            <ul className="flex gap-10">
              {navigation?.map((item) => (
                <li>{item?.title}</li>
              ))}
            </ul>
          </div>
        </div>
        <Banner />
        <Favourite />
        <What />
      </main>
    </>
  );
}

export default App;

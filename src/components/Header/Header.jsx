import {
  CartIcon,
  HelpIcon,
  OfferIcon,
  SearchIcon,
  SignInIcon,
} from "./Icons/Icon";

const navBarItems = [
  {
    name: "Cart",
    icon: <CartIcon />,
  },
  {
    name: "Sign In",
    icon: <SignInIcon />,
  },
  {
    name: "Help",
    icon: <HelpIcon />,
  },
  {
    name: "Offers",
    icon: <OfferIcon />,
  },
  {
    name: "Search",
    icon: <SearchIcon />,
  },
];

function Header() {
  return (
    <header className="shadow-md fixed top-0 left-0 right-0 h-20 bg-white z-[1000] px-4">
      <div>
        <div className="max-w-[1200px] min-w-[1200px] relative my-0 mx-auto flex items-center h-20">
          <a href="/" className="mr-1" title="Swiggy">
            <img src="foodGy.png" className="h-32" />
          </a>

          <div className="relative flex items-center ml-0 cursor-pointer mb-[-1px] pr-[10px] text-[13px]">
            <span className="font-bold float-left relative">
              <span className="block min-w-8 overflow-ellipsis overflow-hidden">
                Other
              </span>
            </span>
            <span className="block pl-[5px] ml-[5px] text-[#686b78] overflow-ellipsis overflow-hidden">
              Bengaluru, Karnataka, India
            </span>
            <span className="absolute -right-3 top-[46%] text-[48px] font-thin -translate-y-1/3 text-[#fc8019] before:content-['\02C7']">
              {/* 🔻 */}
            </span>
          </div>

          <ul className="flex-1 flex flex-row-reverse min-w-0 h-full items-center">
            {navBarItems.map((nvitms, i) => (
              <li
                className="text-[#3d4152] font-medium cursor-pointer first:mr-0 mr-[60px]"
                key={i}
              >
                <div className="relative">
                  <div>
                    <div className="relative h-[80px] cursor-pointer flex">
                      <a className="flex items-center pl-7">
                        <span className="absolute top-2/4 left-0 -translate-y-2/4">
                          {nvitms.icon}
                        </span>
                        <span>{nvitms.name}</span>
                      </a>
                    </div>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </header>
  );
}

export default Header;

import { memo, useState } from "react";
import "./style.scss";
import { Link } from "react-router-dom";
import { FaFacebook } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";
import { FaShippingFast } from "react-icons/fa";
import { CiLogin } from "react-icons/ci";
import { FaInstagram } from "react-icons/fa";
import { SiZalo } from "react-icons/si";
import { IoHome } from "react-icons/io5";
import { FaShoppingCart } from "react-icons/fa";
import { ROUTERS } from "../../../../utils/router";
import { CiSearch } from "react-icons/ci";
import { TbTruckReturn } from "react-icons/tb";
import { AiFillLike } from "react-icons/ai";
import { FaCircleUser } from "react-icons/fa6";
const Header = () => {
  const [menus, setMenu] = useState([
    {
      name: "Điện thoại",
      path: ROUTERS.USER.PHONE,
      isShowSubMenu: false,
      // eslint-disable-next-line no-sparse-arrays
      child: [
        {
          name: "Iphone",
          path: "",
        },
        {
          name: "Samsung",
          path: "",
        },
        ,
        {
          name: "Oppo",
          path: "",
        },
        {
          name: "Redmi",
          path: "",
        },
        {
          name: "Realme",
          path: "",
        },
      ],
    },
    {
      name: "Laptop & Macbook",
      path: ROUTERS.USER.LAPTOP,
      isShowSubMenu: false,
      child: [
        {
          name: "Laptop văn phòng",
          path: "",
        },
        {
          name: "Laptop gaming",
          path: "",
        },
        {
          name: "laptop kỹ thuật",
          path: "",
        },
        {
          name: "Macbook",
          path: "",
        },
      ],
    },
    {
      name: "Thiết bị",
      path: ROUTERS.USER.DEVICE,
      isShowSubMenu: false,
      child: [
        {
          name: "Màn hình máy tính",
          path: "",
        },
        {
          name: "Tai nghe",
          path: "",
        },
        {
          name: "Bàn phím",
          path: "",
        },
        {
          name: "Chuột",
          path: "",
        },
      ],
    },
    {
      name: "Máy tính bảng",
      path: ROUTERS.USER.TABLET,
      isShowSubMenu: false,
      child: [
        {
          name: "iPad",
          path: "",
        },
        {
          name: "Samsung",
          path: "",
        },
        {
          name: "Xiaomi",
          path: "",
        },
        {
          name: "Lenovo",
          path: "",
        },
      ],
    },
    {
      name: "Máy tính",
      path: ROUTERS.USER.DEVICE,
      isShowSubMenu: false,
      child: [
        {
          name: "Máy tính gaming - đồ hoạ",
          path: "",
        },
        {
          name: "Máy tính văn phòng - làm việc",
          path: "",
        },
      ],
    },
  ]);
  return (
    <>
      <div className="header_top">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 header_top_left">
              <ul>
                <li>
                  <Link>
                    <FaFacebook></FaFacebook>
                  </Link>
                </li>
                <li>
                  <Link>
                    <FaInstagram />
                  </Link>
                </li>
                <li>
                  <Link>
                    <SiZalo />
                  </Link>
                </li>
                <li>
                  <FaPhoneAlt></FaPhoneAlt>
                  <span>(+84)944458409</span>
                </li>
              </ul>
            </div>
            <div className="col-lg-3 header_top_center">
              {" "}
              <span>ĐỔI TRẢ DỄ DÀNG</span>
              <TbTruckReturn />
            </div>

            <div className="col-lg-3 header_top_center">
              <span>GIÁ LUÔN RẺ NHẤT</span>
              <AiFillLike />
            </div>
            <div className="col-lg-3 header_top_right">
              <span>MIỄN PHÍ GIAO HÀNG</span>
              <FaShippingFast></FaShippingFast>
            </div>
          </div>
        </div>
      </div>
      <div className="col-header-space"></div>
      <div className="container">
        <div className="row">
          <div className="col-3">
            <img src="https://salt.tikicdn.com/ts/upload/0e/07/78/ee828743c9afa9792cf20d75995e134e.png"></img>
          </div>
          <div className="col-3 header_search_bar">
            <form>
              <input type="text" placeholder="Nhập từ khoá"></input>
              <button type="submit">
                <CiSearch />
              </button>
            </form>
          </div>
          <div className="col-4 header_button_right">
            <ul>
              <li>
                <Link>
                  <IoHome />
                  <span>Trang chủ</span>
                </Link>
              </li>
              <li>
                <Link>
                  <FaCircleUser />
                  <span>Đăng nhập</span>
                </Link>
              </li>
              <li>
                <Link>
                  <FaShoppingCart></FaShoppingCart>
                  <span>Giỏ hàng</span>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="header_menu">
        <nav className="container">
          <ul>
            {menus?.map((menu, menuKey) => (
              <li key={menuKey}>
                <Link to={menu?.path}>{menu?.name}</Link>

                {menu.child && (
                  <ul className="header_menu_dropdown">
                    {menu?.child.map((childMenu, childKey) => (
                      <li key={"${menuKey} - ${childKey}"}>
                        {" "}
                        <Link to={childMenu?.path}>{childMenu?.name}</Link>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </>
  );
};
export default memo(Header);

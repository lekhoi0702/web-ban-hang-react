import { memo } from "react";
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
const Header = () => {
  return (
    <>
      <div className="header_top">
        <div className="container">
          <div className="row">
            <div className="col-4 header_top_left">
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
            <div className="col-3 header_top_center">
              <span>Miễn phí giao hàng toàn quốc</span>
              <FaShippingFast></FaShippingFast>
            </div>
            <div className="col-3 header_top_right">
              <ul>
                <li>
                  <Link>
                    <IoHome />
                    <span>Trang chủ</span>
                  </Link>
                </li>
                <li>
                  <Link>
                    <CiLogin />
                    <span>Đăng nhập</span>
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-4">
            <img src="https://salt.tikicdn.com/ts/upload/0e/07/78/ee828743c9afa9792cf20d75995e134e.png"></img>
          </div>
          <div className="col-3">
            <span>Chào mừng đến với KHÔI LAPTOP</span>
          </div>
          <div className="col-3 header_cart">
            <ul>
              <li>
                <Link>
                  <FaShoppingCart></FaShoppingCart>
                </Link>
              </li>
              <li>
                <span>1</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
};
export default memo(Header);

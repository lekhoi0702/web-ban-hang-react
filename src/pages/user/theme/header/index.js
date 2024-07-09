import { memo } from "react";
import "./style.scss";
import { AiFillFacebook } from "react-icons/ai";
const Header = () => {
  return (
    <>
      <div className="header_top">
        <div className="container">
          <div className="row">
            <div className="col-3 header_top_left">
              <ul>
                <li>
                  <img
                    src="https://salt.tikicdn.com/ts/upload/0e/07/78/ee828743c9afa9792cf20d75995e134e.png"
                    alt="logo"
                  ></img>
                </li>
                <li>
                  <span>Rẻ hơn Shopee</span>
                </li>
              </ul>
            </div>
            <div className="col-4">thanh tìm kiếm</div>
            <div className="col-3 header_top_right">
              <ul>
                <li>Trang chủ</li>
                <li>Tài khoản</li>
                <li>Giỏ hàng</li>
                <li>
                  <AiFillFacebook />
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default memo(Header);

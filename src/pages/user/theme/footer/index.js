import { memo } from "react";
import { Link } from "react-router-dom";
import "./style.scss";
const Footer = () => {
  return (
    <>
      <footer className="footer_bot">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 footer_about">
              <ul>
                <li>
                  {" "}
                  <p>© KHOI LAPTOP LLC.</p>
                </li>
                <li>
                  <Link>
                    <span>Giới thiệu</span>
                  </Link>
                </li>
                <li>
                  <Link>
                    <span>Tuyển dụng</span>
                  </Link>
                </li>
                <li>
                  <img src="https://theme.hstatic.net/200000722513/1001090675/14/logo-bct.png?v=5723"></img>
                </li>
              </ul>
            </div>
            <div className="col-lg-3">
              <ul>
                <li>
                  <p>Chính sách</p>
                </li>
                <li>
                  <Link>
                    <span>Chính sách bảo hành</span>
                  </Link>
                </li>
                <li>
                  <Link>
                    <span>Chính sách thanh toán</span>
                  </Link>
                </li>
                <li>
                  <Link>
                    <span>Chính sách giao hàng</span>
                  </Link>
                </li>
                <li>
                  <Link>
                    <span>Chính sách bảo mật</span>
                  </Link>
                </li>
              </ul>
            </div>
            <div className="col-lg-3 footer_contact">
              <ul>
                <li>
                  <span>Hỗ trợ(7:00 - 21:00)</span>
                </li>
                <li>
                  <span>Mua hàng: 1900.1000</span>
                </li>
                <li>
                  <span>Bảo hành: 1900.1000</span>
                </li>
                <li>
                  <span>Khiếu nại: 1900.1001</span>
                </li>
              </ul>
            </div>
            <div className="col-lg-3 footer_ship ">
              <ul>
                <li>
                  <span>Đơn vị vận chuyển</span>
                </li>
                <li>
                  <ul>
                    <li>
                      <img src="//theme.hstatic.net/200000722513/1001090675/14/ship_1.png?v=5723"></img>
                      <img src="//theme.hstatic.net/200000722513/1001090675/14/ship_2.png?v=5723"></img>
                      <img src="//theme.hstatic.net/200000722513/1001090675/14/ship_3.png?v=5723"></img>
                      <img src="//theme.hstatic.net/200000722513/1001090675/14/ship_4.png?v=5723"></img>
                    </li>
                  </ul>
                </li>
                <li>
                  <span>Cách thức thanh toán</span>
                </li>
                <li>
                  <ul>
                    <li>
                      <img src="//theme.hstatic.net/200000722513/1001090675/14/pay_1.png?v=5723"></img>
                      <img src="//theme.hstatic.net/200000722513/1001090675/14/pay_3.png?v=5723"></img>
                      <img src="//theme.hstatic.net/200000722513/1001090675/14/pay_2.png?v=5723"></img>
                    </li>
                    <li>
                      <img src="//theme.hstatic.net/200000722513/1001090675/14/pay_4.png?v=5723"></img>
                      <img src="//theme.hstatic.net/200000722513/1001090675/14/pay_5.png?v=5723"></img>
                      <img src="//theme.hstatic.net/200000722513/1001090675/14/pay_6.png?v=5723"></img>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};
export default memo(Footer);

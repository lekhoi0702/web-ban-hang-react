import { memo } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import "./style.scss";
import { Link } from "react-router-dom";
const categories = [
  {
    name: "IPHONE 15",
    img: "https://th.bing.com/th/id/OIP.Vf7cFvXj4qvKGhGY0Qe2tQAAAA?rs=1&pid=ImgDetMain",
  },
  {
    name: "SAMSUNG GALAXY S24 ULTRA",
    img: "https://techring.in/wp-content/uploads/2023/02/Samsung-Galaxy-S24-Ultra.jpg",
  },
  {
    name: "LAPTOP LENOVO LEGION 7I",
    img: "https://www.notebookcheck.net/fileadmin/_processed_/6/9/csm_Lenovo_Legion_7i_Front_Facing_9b3f15cab0.png",
  },
  {
    name: "MACBOOK PRO",
    img: "https://i5.walmartimages.com/asr/940c9c9f-46ad-4295-b8e0-e768a5abbe0e.548eea8bf96072a16038e3357c56946a.jpeg?odnWidth=612&odnHeight=612&odnBg=ffffff",
  },
  {
    name: "PC GAMING VIBOX BUNDLE",
    img: "https://th.bing.com/th/id/OIP.InTJbsby6Ol1ZaBodngrMgAAAA?rs=1&pid=ImgDetMain",
  },
  {
    name: "CHUỘT MÁY TÍNH VICTSING MM057",
    img: "https://th.bing.com/th/id/OIP.4NCKYvBTA-oL7LLdKKSKVwAAAA?rs=1&pid=ImgDetMain",
  },
  {
    name: "IPAD MINI 16GB",
    img: "https://i5.walmartimages.com/asr/f83ff552-e26c-4231-bdc4-4d755beb7f6a_1.e9e57019cdf48725cf07cddfd72c5457.jpeg?odnWidth=1000&odnHeight=1000&odnBg=ffffff",
  },
];
const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
    slidesToSlide: 3, // optional, default to 1.
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
    slidesToSlide: 2, // optional, default to 1.
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    slidesToSlide: 1, // optional, default to 1.
  },
};
const HomePage = () => {
  return (
    <div className="container container_categories_slide">
      {" "}
      <Carousel className="categories_slide" responsive={responsive}>
        {categories.map((items, key) => (
          <div className="categories_slide_items" key={key}>
            <ul>
              <li>
                <Link>
                  {" "}
                  <img
                    src={items.img}
                    alt={items.name}
                    width="200"
                    height="200"
                  />
                  <span>{items.name}</span>
                </Link>
              </li>
            </ul>
          </div>
        ))}
      </Carousel>
    </div>
  );
};
export default memo(HomePage);

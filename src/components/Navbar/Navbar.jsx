import Laptop from "../../assets/img/laptop.png";
import Camera from "../../assets/img/máy ảnh.png";
import Tivi from "../../assets/img/tivi.png";
import Giado from "../../assets/img/giado.png";
import Tainghe from "../../assets/img/tai-nghe.png";
import TheNho from "../../assets/img/the-nho.png";
import Loa from "../../assets/img/loa.png";
import "./navbar.scss";
import { Heading } from "../heading";
export const Navbar = () => {
  const datas = [
    {
      id: 1,
      image: Laptop,
      title: "Laptops",
      url: "",
    },
    {
      id: 2,
      image: Camera,
      title: "Camera",
      url: "",
    },
    {
      id: 3,
      image: Giado,
      title: "Accessories",
      url: "",
    },
    {
      id: 4,
      image: Tivi,
      title: "TV",
      url: "",
    },
    {
      id: 5,
      image: Tainghe,
      title: "Headphones",
      url: "",
    },
    {
      id: 6,
      image: TheNho,
      title: "Storage",
      url: "",
    },
    {
      id: 7,
      image: Loa,
      title: "Home Theater",
      url: "",
    },
  ];
  return (
    <div className="navbar">
      {Heading("Categories", "navbar")}
      <ul className="row navbar__row row-content-between">
        {datas.map((data) => (
          <li
            key={data.id}
            className="column navbar__column "
          >
            <a src={data.url} className="navbar__link">
              {data.title}
            </a>
            <img src={data.image} className="navbar__image" />
          </li>
        ))}
      </ul>
    </div>
  );
};

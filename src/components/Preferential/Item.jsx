const item = {
  id: 1,
  name: "Product Name",
  price: "RS.100,000.00",
  p: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text.",
  img: "/images/product_img_1.png",
  herf: "",
};
const items =[item, item, item];

export const Item = (props) => {
  return (
    <div className="item-list">
      <h2 className="item-list__heading">{props.heading}</h2>
      <ul className="item-list__list">
        {items.map((item, index) => (
          <li key={index} className="item-list__item">
            <div className="box">
              <img src={item.img} alt="" />
              <span>{item.name}</span>
              <span>{item.price}</span>
              <p>{item.p}</p>
              <button>add to cart</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

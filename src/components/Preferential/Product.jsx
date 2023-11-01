import "./Product.scss";

export const Product = () => {
  const items = [
    {
      id: 1,
      name: "Product Name",
      price: "RS.100,000.00",
      p: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text.",
      img: "/images/product_img_1.png",
      herf: "",
    },
    {
      id: 1,
      name: "Product Name",
      price: "RS.100,000.00",
      p: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text.",
      img: "/images/product_img_1.png",
      herf: "",
    },
    {
      id: 1,
      name: "Product Name",
      price: "RS.100,000.00",
      p: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text.",
      img: "/images/product_img_1.png",
      herf: "",
    },
    {
      id: 1,
      name: "Product Name",
      price: "RS.100,000.00",
      p: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text.",
      img: "/images/product_img_1.png",
      herf: "",
    },
  ];
  return (
    <div className="item-list__product">
      <div className="container">
        <h2 className="product__heading heading-h2">Best Deals For You!</h2>
        <div className="product__list">
          {items.map((item, index) => (
            <div key={index} className="product__item ">
              <div className="box">
                <img src={item.img} alt="" />
                <span className="title__name">{item.name}</span>
                <span className="title__price">{item.price}</span>
                <p>{item.p}</p>
                <button>add to cart</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

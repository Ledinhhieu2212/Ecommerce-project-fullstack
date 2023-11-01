import "./Category.scss";

export const Category = () => {
  const boxs = [
    {
      span: "Tech",
      img: "/images/slide_down_img_1.png",
    },
    {
      span: "Electronics",
      img: "/images/slide_down_img_2.png",
    },
    {
      span: "Health & Beauty",
      img: "/images/slide_down_img_3.png",
    },
    {
      span: "Fashion",
      img: "/images/slide_down_img_4.png",
    },
    {
      span: "Furniture",
      img: "/images/slide_down_img_5.png",
    },
    {
      span: "Sports",
      img: "/images/slide_down_img_6.png",
    },
  ];

  return (
    <div className="product-category">
      <div className="container">
        <h2 className="heading-category">Shop Our Top Categories</h2>
        <div className="row justify-content-between category__row">
          {boxs.map((box, index) => (
            <div className="col" key={index}>
              <div className="box">
                <span>{box.span}</span>
                <img src={box.img} />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

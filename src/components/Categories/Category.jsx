import "./Category.scss";

export const Category = () => {
  return (
    <div className="product-category">
      <div className="container">
        <h2 className="heading-category">Shop Our Top Categories</h2>
        <div className="row justify-content-between category__row">
          <div className="col">
            <div className="box">
              <span>Tech</span>
              <img src="/images/slide_down_img_1.png" alt="laptop, pc" />
            </div>
          </div>
          <div className="col">
            <div className="box">
              <span>Electronics</span>
              <img src="/images/slide_down_img_2.png" alt="laptop, pc" />
            </div>
          </div>
          <div className="col">
            <div className="box">
              <span>Health & Beauty</span>
              <img src="/images/slide_down_img_3.png" alt="laptop, pc" />
            </div>
          </div>
          <div className="col">
            <div className="box">
              <span>Fashion</span>
              <img src="/images/slide_down_img_4.png" alt="laptop, pc" />
            </div>
          </div>
          <div className="col">
            <div className="box">
              <span>Furniture</span>
              <img src="/images/slide_down_img_5.png" alt="laptop, pc" />
            </div>
          </div>
          <div className="col">
            <div className="box">
              <span>Sports</span>
              <img src="/images/slide_down_img_6.png" alt="laptop, pc" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

import React from "react";

export default function Body() {
  return (
    <div>
      <div className="card mt-3" style={{ maxWidth: "10rem" }}>
        <img
          className="card-img-top"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4-zRepqLR8lF9Ka-QvOL-ekizSY6ouGKeMQ&usqp=CAU"
          alt="Card image cap"
        />
        <div className="card-body">
          <h5 className="card-title">Card title</h5>
          <p className="card-text">Some text.</p>
          <p className="card-text">Total Prize: $1000</p>
          <div className="container w-100">
            <select className="m-2 h-100 w-100 bg-success rounded">
              {Array.from(Array(6), (e, i) => {
                return (
                  <option key={i + 1} value={i + 1}>
                    {i + 1}
                  </option>
                );
              })}
            </select>
            <button>Add+</button>
          </div>
          {/* <button className="btn btn-primary">
            <span className="material-icons">shopping_cart</span> Add to Cart
          </button> */}
        </div>
      </div>
      <div>
        <img
          style={{
            borderWidth: " 0px",
            borderStyle: "solid",
            borderColor: " #ffffff",
          }}
          width="200"
          height="200"
          src="https://tastythin.com/wp-content/uploads/2017/03/greek-salad-power-bowls-300x300.jpg"
          className="attachment-200x200 size-200x200 entered lazyloaded"
          alt="Greek Salad Power Bowls - Tons of protein and fresh Greek flavors make this recipe a perfect one dish meal or make ahead lunch! | tastythin.com"
          decoding="async"
          data-lazy-srcset="https://tastythin.com/wp-content/uploads/2017/03/greek-salad-power-bowls-300x300.jpg 300w, https://tastythin.com/wp-content/uploads/2017/03/greek-salad-power-bowls-150x150.jpg 150w, https://tastythin.com/wp-content/uploads/2017/03/greek-salad-power-bowls-600x600.jpg 600w"
          data-lazy-sizes="(max-width: 200px) 100vw, 200px"
          data-pin-url="https://tastythin.com/greek-salad-power-bowls/?tp_image_id=4282"
          data-lazy-src="https://tastythin.com/wp-content/uploads/2017/03/greek-salad-power-bowls-300x300.jpg"
          data-ll-status="loaded"
          sizes="(max-width: 200px) 100vw, 200px"
          srcset="https://tastythin.com/wp-content/uploads/2017/03/greek-salad-power-bowls-300x300.jpg 300w, https://tastythin.com/wp-content/uploads/2017/03/greek-salad-power-bowls-150x150.jpg 150w, https://tastythin.com/wp-content/uploads/2017/03/greek-salad-power-bowls-600x600.jpg 600w"
        ></img>
      </div>
    </div>
  );
}

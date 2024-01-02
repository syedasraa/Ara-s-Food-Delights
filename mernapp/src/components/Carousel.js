// import React from "react";

// export default function Carousel() {
//   return (
//     <div id="car" style={{ objectFit: "contain !important" }}>
//       <div
//         id="carouselExampleCaptions"
//         className="carousel slide"
//         data-bs-ride="carousel"
//       >
//         <div className="carousel-indicators">
//           <button
//             type="button"
//             data-bs-target="#carouselExampleCaptions"
//             data-bs-slide-to="0"
//             className="active"
//             aria-current="true"
//             aria-label="Slide 1"
//           ></button>
//           <button
//             type="button"
//             data-bs-target="#carouselExampleCaptions"
//             data-bs-slide-to="1"
//             aria-label="Slide 2"
//           ></button>
//           <button
//             type="button"
//             data-bs-target="#carouselExampleCaptions"
//             data-bs-slide-to="2"
//             aria-label="Slide 3"
//           ></button>
//         </div>
//         <div className="carousel-inner">
//           <div className="carousel-item active">
//             <img
//               src="https://www.gutekueche.at/storage/media/recipe-category/98042/conv/brunch-rezepte-default.jpg"
//               className="d-block w-100"
//               alt="..."
//             ></img>
//             <div className="carousel-caption d-none d-md-block">
//               <div>
//                 <form className="d-flex">
//                   <input
//                     className="form-control me-2"
//                     type="search"
//                     placeholder="Search"
//                     aria-label="Search"
//                   ></input>
//                   <button type="button" class="btn btn-light">
//                     ⌕‍
//                   </button>
//                 </form>
//               </div>
//               <h5>First slide label</h5>
//               <p>
//                 Some representative placeholder content for the first slide.
//               </p>
//             </div>
//           </div>
//           <div className="carousel-item">
//             {/* https://assets.bonappetit.com/photos/61ba70da510874520d257b78/16:9/w_1920,c_limit/LEDE_Oma's%20Hideaway,%20Credit%20Christine%20Dong.jpg */}
//             {/* <img src="https://assets.vogue.in/photos/64354d23b23ad0e74c3fbd6d/master/w_1600,c_limit/The%20Pink%20Elephant%20Hyderabad.jpg" className="d-block h-20 w-100" alt="..."></img> */}
//             <img
//               src="https://shef.com/homemade-food/wp-content/uploads/tabletop-spread-of-authentic-indian-food.jpg"
//               className="d-block w-100"
//               alt="..."
//             ></img>
//             <div className="carousel-caption d-none d-md-block">
//               <div>
//                 <form className="d-flex">
//                   <input
//                     className="form-control me-2"
//                     type="search"
//                     placeholder="Search"
//                     aria-label="Search"
//                   ></input>
//                   <button type="button" class="btn btn-light">
//                     ⌕‍
//                   </button>
//                 </form>
//               </div>
//               <h5>Second slide label</h5>
//               <p>
//                 Some representative placeholder content for the second slide.
//               </p>
//             </div>
//           </div>
//           <div className="carousel-item">
//             <img
//               src="https://assets.vogue.in/photos/64354bb575ee42df6ec2bcd8/master/w_1600,c_limit/Living%20Room%20by%20Coco%20Pune.jpg"
//               className="d-block w-100"
//               alt="..."
//             ></img>
//             <div className="carousel-caption d-none d-md-block">
//               <div>
//                 <form className="d-flex">
//                   <input
//                     className="form-control me-2"
//                     type="search"
//                     placeholder="Search"
//                     aria-label="Search"
//                   ></input>
//                   <button type="button" class="btn btn-light">
//                     ⌕‍
//                   </button>
//                 </form>
//               </div>
//               <h5>Third slide label</h5>
//               <p>
//                 Some representative placeholder content for the third slide.
//               </p>
//             </div>
//           </div>
//         </div>
//         <button
//           className="carousel-control-prev"
//           type="button"
//           data-bs-target="#carouselExampleCaptions"
//           data-bs-slide="prev"
//         >
//           <span
//             className="carousel-control-prev-icon"
//             aria-hidden="true"
//           ></span>
//           <span className="visually-hidden">Previous</span>
//         </button>
//         <button
//           className="carousel-control-next"
//           type="button"
//           data-bs-target="#carouselExampleCaptions"
//           data-bs-slide="next"
//         >
//           <span
//             className="carousel-control-next-icon"
//             aria-hidden="true"
//           ></span>
//           <span className="visually-hidden">Next</span>
//         </button>
//       </div>
//     </div>
//   );
// }
import React from "react";

export default function Carousel() {
  return (
    <div>
      <div
        id="carouselExampleFade"
        className="carousel slide carousel-fade "
        data-bs-ride="carousel"
      >
        <div className="carousel-inner " id="carousel">
          <div class=" carousel-caption  " style={{ zIndex: "9" }}>
            <form className=" d-flex justify-content-center">
              {" "}
              {/* justify-content-center, copy this <form> from navbar for search box */}
              <input
                className="form-control me-2 w-75 bg-white "
                type="search"
                placeholder="Type in..."
                aria-label="Search"
              />
              <button className="btn text-white bg-success" type="submit">
                Search
              </button>
            </form>
          </div>
          <div className="carousel-item active">
            <img
              //   src="https://source.unsplash.com/random/900x700/?burger"
              src="https://www.gutekueche.at/storage/media/recipe-category/98042/conv/brunch-rezepte-default.jpg"
              className="d-block w-100  "
              //   style={{ filter: "brightness(30%)" }}
              alt="..."
            />
          </div>
          <div className="carousel-item">
            <img
              //   src="https://source.unsplash.com/random/900x700/?pastry"
              src="https://shef.com/homemade-food/wp-content/uploads/tabletop-spread-of-authentic-indian-food.jpg"
              className="d-block w-100 "
              //   style={{ filter: "brightness(30%)" }}
              alt="..."
            />
          </div>
          <div className="carousel-item">
            <img
              //   src="https://source.unsplash.com/random/900x700/?barbeque"
              src="https://assets.vogue.in/photos/64354bb575ee42df6ec2bcd8/master/w_1600,c_limit/Living%20Room%20by%20Coco%20Pune.jpg"
              className="d-block w-100 "
              //   style={{ filter: "brightness(30%)" }}
              alt="..."
            />
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleFade"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleFade"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
}

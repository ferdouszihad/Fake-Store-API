const loadCatagory = () => {
  fetch("https://fakestoreapi.com/products/categories")
    .then((res) => res.json())
    .then((json) => displayCatagory(json));
};

const displayCatagory = (data) => {
  let catagoryContainer = document.getElementById("catagory");
  catagoryContainer.innerHTML = `
  ${data
    .map((cat) => {
      console.log(cat);
      return `<button  class="btn  btn-outline-light rounded-pill">${cat}</button>`;
    })
    .join("")}
  
  
  `;
};

document.getElementById("catagory").addEventListener("click", function (e) {
  if (e.target.tagName === "BUTTON") {
    const catagory = e.target.innerText;
    fetch(`https://fakestoreapi.com/products/category/${catagory}`)
      .then((res) => res.json())
      .then((json) => displayProducts(json));
  }
});

// {
//     "id": 9,
//     "title": "WD 2TB Elements Portable External Hard Drive - USB 3.0 ",
//     "price": 64,
//     "description": "USB 3.0 and USB 2.0 Compatibility Fast data transfers Improve PC Performance High Capacity; Compatibility Formatted NTFS for Windows 10, Windows 8.1, Windows 7; Reformatting may be required for other operating systems; Compatibility may vary depending on user’s hardware configuration and operating system",
//     "category": "electronics",
//     "image": "https://fakestoreapi.com/img/61IBBVJvSDL._AC_SY879_.jpg",
//     "rating": {
//         "rate": 3.3,
//         "count": 203
//     }
// }

const displayProducts = (products) => {
  const productsContainer = document.getElementById("products");
  productsContainer.innerHTML = `

  ${products
    .map((product) => {
      return `
      <div class='col'>
         <div class="card h-100" >
            <img src="${product.image}" class="card-img-top" alt="...">
            <div class="card-body">
               <h5 class="card-title">${product.title}</h5>
               <h6 class="card-title">Price $${product.price}</h6>
               <hr>
               <p class="card-text">${
                 product.description.slice(0, 100) + "...."
               }</p>
               <a href="#" class="btn btn-primary">Buy Now</a>
            </div>
         </div>
      
      </div>
      
      
      `;
    })
    .join("")}
  
  `;

  console.log(products);
};

loadCatagory();

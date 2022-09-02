function ajax(src, callback) {
  // 1. Create XMLHttpRequest object
  const xhr = new XMLHttpRequest();

  // 2. Create callback function
  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4) {
      const responseJSON = JSON.parse(xhr.responseText);
      callback(responseJSON);
    }
  };

  // 3. Open request
  xhr.open("GET", src);

  // 4. Send request
  xhr.send();
}

function render(data) {
  const products = document.querySelector(".products");
  const productList = document.createElement("div");

  let content = "";
  for (let i = 0; i < data.length; i++) {
    content += `
<h2 class="name">Product${i + 1}: ${data[i].name}</h2>
<p class="price">Price: ${data[i].price}</p>
<p class="description">Description: ${data[i].description}</p>
<br>
`;
  }

  productList.innerHTML = content;
  products.appendChild(productList);
}

// you should get product information in JSON format and render data in the page
ajax(
  "https://appworks-school.github.io/Remote-Assignment-Data/products",
  function (response) {
    render(response);
  }
);

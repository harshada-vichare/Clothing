const allProducts = [
  {
    id: 1,
    name: "Classic Denim Jacket",
    image:
      "https://images.unsplash.com/photo-1520975916090-3105956dac38?auto=format&fit=crop&w=500&q=80",
    price: 80,
    oldPrice: 100,
    discount: 20,
    tag1: "New",
    tag2: "Favourite",
    buttonText: "Buy Now",
  },
  {
    id: 2,
    name: "Summer Floral Dress",
    image:
      "https://images.unsplash.com/photo-1496747611176-843222e1e57c?auto=format&fit=crop&w=500&q=80",
    price: 65,
    oldPrice: null,
    discount: null,
    tag1: "New",
    tag2: null,
    buttonText: "Buy Now",
  },
  {
    id: 3,
    name: "Leather Biker Jacket",
    image:
      "https://images.unsplash.com/photo-1512436991641-6745cdb1723f?auto=format&fit=crop&w=500&q=80",
    price: 150,
    oldPrice: 180,
    discount: 15,
    tag1: null,
    tag2: "Luxury",
    buttonText: "Buy Now",
  },
  {
    id: 4,
    name: "Slim Fit Shirt",
    image:
      "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?auto=format&fit=crop&w=500&q=80",
    price: 45,
    oldPrice: null,
    discount: null,
    tag1: null,
    tag2: "Favourite",
    buttonText: "Buy Now",
  },
  {
    id: 5,
    name: "Casual Hoodie",
    image:
      "https://images.unsplash.com/photo-1556821840-3a63f95609a7?auto=format&fit=crop&w=500&q=80",
    price: 55,
    oldPrice: null,
    discount: null,
    tag1: "New",
    tag2: null,
    buttonText: "Buy Now",
  },
  {
    id: 6,
    name: "Formal Blazer",
    image:
      "https://images.unsplash.com/photo-1593030761757-71fae45fa0e7?auto=format&fit=crop&w=500&q=80",
    price: 120,
    oldPrice: 135,
    discount: 10,
    tag1: null,
    tag2: "Luxury",
    buttonText: "Buy Now",
  },
  {
    id: 7,
    name: "Sport Tracksuit",
    image:
      "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=500&q=80",
    price: 75,
    oldPrice: null,
    discount: null,
    tag1: null,
    tag2: "Favourite",
    buttonText: "Buy Now",
  },
  {
    id: 8,
    name: "Vintage T-Shirt",
    image:
      "https://images.unsplash.com/photo-1503342217505-b0a15ec3261c?auto=format&fit=crop&w=500&q=80",
    price: 35,
    oldPrice: null,
    discount: null,
    tag1: null,
    tag2: null,
    buttonText: "Buy Now",
  },
  {
    id: 9,
    name: "Luxury Silk Shirt",
    image:
      "https://images.unsplash.com/photo-1596755094514-f87e34085b2c?auto=format&fit=crop&w=500&q=80",
    price: 140,
    oldPrice: 185,
    discount: 25,
    tag1: null,
    tag2: "Luxury",
    buttonText: "Buy Now",
  },
  {
    id: 10,
    name: "Cargo Pants",
    image:
      "https://images.unsplash.com/photo-1552374196-c4e7ffc6e126?auto=format&fit=crop&w=500&q=80",
    price: 60,
    oldPrice: null,
    discount: null,
    tag1: "New",
    tag2: null,
    buttonText: "Buy Now",
  },
  {
    id: 11,
    name: "Evening Gown",
    image:
      "https://images.unsplash.com/photo-1529139574466-a303027c1d8b?auto=format&fit=crop&w=500&q=80",
    price: 200,
    oldPrice: null,
    discount: null,
    tag1: null,
    tag2: "Luxury",
    buttonText: "Buy Now",
  },
  {
    id: 12,
    name: "Winter Coat",
    image:
      "https://images.unsplash.com/photo-1544441893-675973e31985?auto=format&fit=crop&w=500&q=80",
    price: 170,
    oldPrice: null,
    discount: null,
    tag1: null,
    tag2: "Favourite",
    buttonText: "Buy Now",
  },
  {
    id: 13,
    name: "Basic White Tee",
    image:
      "https://images.unsplash.com/photo-1520974735194-9d3d4b5b7b0c?auto=format&fit=crop&w=500&q=80",
    price: 25,
    oldPrice: null,
    discount: null,
    tag1: null,
    tag2: null,
    buttonText: "Buy Now",
  },
  {
    id: 14,
    name: "Oversize Street Hoodie",
    image:
      "https://images.unsplash.com/photo-1608231387042-66d1773070a5?auto=format&fit=crop&w=500&q=80",
    price: 85,
    oldPrice: null,
    discount: null,
    tag1: "New",
    tag2: "Favourite",
    buttonText: "Buy Now",
  },
  {
    id: 15,
    name: "Designer Jeans",
    image:
      "https://images.unsplash.com/photo-1542272604-787c3835535d?auto=format&fit=crop&w=500&q=80",
    price: 110,
    oldPrice: null,
    discount: null,
    tag1: null,
    tag2: "Luxury",
    buttonText: "Buy Now",
  },
  {
    id: 16,
    name: "Premium Suit",
    image:
      "https://images.unsplash.com/photo-1593032457862-0971f8d6f1d8?auto=format&fit=crop&w=500&q=80",
    price: 300,
    oldPrice: 430,
    discount: 30,
    tag1: null,
    tag2: "Luxury",
    buttonText: "Buy Now",
  },
  {
    id: 17,
    name: "Printed Casual Shirt",
    image:
      "https://images.unsplash.com/photo-1603252109303-2751441dd157?auto=format&fit=crop&w=500&q=80",
    price: 50,
    oldPrice: null,
    discount: null,
    tag1: "New",
    tag2: null,
    buttonText: "Buy Now",
  },
  {
    id: 18,
    name: "Athletic Shorts",
    image:
      "https://images.unsplash.com/photo-1598554747436-c9293d6a588f?auto=format&fit=crop&w=500&q=80",
    price: 40,
    oldPrice: 55,
    discount: 20,
    tag1: null,
    tag2: null,
    buttonText: "Buy Now",
  },
  {
    id: 19,
    name: "Knitted Sweater",
    image:
      "https://images.unsplash.com/photo-1578587018452-892bacefd3f2?auto=format&fit=crop&w=500&q=80",
    price: 95,
    oldPrice: null,
    discount: null,
    tag1: null,
    tag2: "Favourite",
    buttonText: "Buy Now",
  },
  {
    id: 20,
    name: "Luxury Leather Coat",
    image:
      "https://images.unsplash.com/photo-1520975682031-a4764de95f8d?auto=format&fit=crop&w=500&q=80",
    price: 250,
    oldPrice: 300,
    discount: 17,
    tag1: "New",
    tag2: "Luxury",
    buttonText: "Buy Now",
  },
];

const productsContainer = document.querySelector(".products");

function generateProduct(item) {
  let product = document.createElement("div");
  product.classList.add("product");

  let discount = document.createElement("div");
  if (item.discount) {
    discount.classList.add("discount");
    discount.textContent = `${item.discount}%`;
  }
  let img = document.createElement("img");
  img.src = item.image;

  let h3 = document.createElement("h3");
  h3.textContent = item.name;

  let price = document.createElement("div");
  price.classList.add("price");
  price.textContent = `$ ${item.price}`;

  let oldPrice = document.createElement("span");
  if (item.oldPrice) {
    oldPrice.classList.add("old-price");
    oldPrice.textContent = `$ ${item.oldPrice}`;
  }
  price.append(oldPrice);

  let tags = document.createElement("div");
  tags.classList.add("tags");

  let tagNew = document.createElement("span");
  if (item.tag1 === "New") {
    tagNew.classList.add("tag", "new");
    tagNew.textContent = "New";
  }

  let tagFav = document.createElement("span");
  if (item.tag2 === "Favourite") {
    tagFav.classList.add("tag", "fav");
    tagFav.textContent = "Favourite";
  }

  let tagLux = document.createElement("span");
  if (item.tag2 === "Luxury") {
    tagLux.classList.add("tag", "luxury");
    tagLux.textContent = "Luxury";
  }
  tags.append(tagNew, tagFav, tagLux);

  let btn = document.createElement("button");
  btn.textContent = item.buttonText;

  product.append(discount, img, h3, price, tags, btn);

  productsContainer.append(product);
}

function showProducts(arr) {
  productsContainer.innerHTML = "";
  arr.forEach((item) => {
    generateProduct(item);
  });
}

showProducts(allProducts);

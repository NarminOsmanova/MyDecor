const products = [
  {
    id: "1",
    img: "https://mydecor-be87.kxcdn.com/mydecor/wp-content/uploads/2021/01/20-450x450.jpg",
    time: "",
    category: "decor",
    title: "Plant Holders Natural Material",
    description: "Product Details ",
    li1: "Seating Capacity: 2",
    li2: "Weight Capacity: 550 lb.",
    li3: "Adult Assembly Required: Yes",
    price: "10.00",
    status: true,
    link2: "Add to cart",
  },
  {
    id: "2",
    img: "https://mydecor-be87.kxcdn.com/mydecor/wp-content/uploads/2021/01/19-450x450.jpg",
    time: "",
    category: "decor",
    title: "M24 Set 3 Pieces Decor",
    description: "Product Details ",
    li1: "Seating Capacity: 2",
    li2: "Weight Capacity: 550 lb.",
    li3: "Adult Assembly Required: Yes",
    previousprice: "$50.00",
    price: "39.00",
    status: true,
    link2: "Add to cart",
  },
  {
    id: "3",
    img: "https://mydecor-be87.kxcdn.com/mydecor/wp-content/uploads/2021/01/36-450x450.jpg",
    time: "",
    category: "decor",
    title: "Framed Canvas Wall Art",
    description: "Product Details ",
    li1: "Seating Capacity: 2",
    li2: "Weight Capacity: 550 lb.",
    li3: "Adult Assembly Required: Yes",
    price: "30.00",
    status: true,
    link2: "Add to cart",
  },
  {
    id: "4",
    img: "https://mydecor-be87.kxcdn.com/mydecor/wp-content/uploads/2021/01/23-450x450.jpg",
    time: "",
    category: "decor",
    title: "Ceramic Vases Flower Vase",
    description: "Product Details ",
    li1: "Seating Capacity: 2",
    li2: "Weight Capacity: 550 lb.",
    li3: "Adult Assembly Required: Yes",
    price: "599.00",
    status: true,
    link2: "Add to cart",
  },
  {
    id: "5",
    img: "https://mydecor-be87.kxcdn.com/mydecor/wp-content/uploads/2021/01/28-450x450.jpg",
    time: "",
    category: "decor",
    title: "Twin Bell Alarm Clock",
    description: "Product Details ",
    li1: "Seating Capacity: 2",
    li2: "Weight Capacity: 550 lb.",
    li3: "Adult Assembly Required: Yes",
    price: "15.00",
    status: true,
    link2: "Add to cart",
  },
  {
    id: "6",
    img: "https://mydecor-be87.kxcdn.com/mydecor/wp-content/uploads/2021/01/5-450x450.jpg",
    time: "",
    category: "decor",
    title: "Lamps Vintage for Bedroom",
    description: "Product Details ",
    li1: "Seating Capacity: 2",
    li2: "Weight Capacity: 550 lb.",
    li3: "Adult Assembly Required: Yes",
    price: "120.00",
    status: true,
    link2: "Add to cart",
  },
  {
    id: "7",
    img: "https://mydecor-be87.kxcdn.com/mydecor/wp-content/uploads/2021/01/22-450x450.jpg",
    time: "",
    category: "decor",
    title: "Super Soft Fluffy Rug",
    description: "Product Details ",
    li1: "Seating Capacity: 2",
    li2: "Weight Capacity: 550 lb.",
    li3: "Adult Assembly Required: Yes",
    price: "20.00",
    status: true,
    link2: "Add to cart",
  },
  {
    id: "8",
    img: "https://mydecor-be87.kxcdn.com/mydecor/wp-content/uploads/2021/01/49-450x450.jpg",
    time: "",
    category: "decor",
    title: "Oversized Mirror Full Length",
    description: "Product Details ",
    li1: "Seating Capacity: 2",
    li2: "Weight Capacity: 550 lb.",
    li3: "Adult Assembly Required: Yes",
    price: "330.00",
    status: "92 in stock",
    link2: "Add to cart",
  },
  {
    id: "9",
    img: "https://mydecor-be87.kxcdn.com/mydecor/wp-content/uploads/2021/01/9-450x450.jpg",
    time: "",
    category: "table",
    title: "N200X Modern Style Chairs",
    description: "Product Details ",
    li1: "Seating Capacity: 2",
    li2: "Weight Capacity: 550 lb.",
    li3: "Adult Assembly Required: Yes",
    price: "129.00",
    status: false,
    link1: "Read more",
  },
  {
    id: "10",
    img: "https://mydecor-be87.kxcdn.com/mydecor/wp-content/uploads/2021/01/15-450x450.jpg",
    time: "",
    category: "table",
    title: "Table and Chair Set",
    description: "Product Details ",
    li1: "Seating Capacity: 2",
    li2: "Weight Capacity: 550 lb.",
    li3: "Adult Assembly Required: Yes",
    price: "799.00",
    status: false,
    link1: "Read more",
  },
  {
    id: "11",
    img: "https://mydecor-be87.kxcdn.com/mydecor/wp-content/uploads/2021/01/1-450x450.jpg",
    time: "",
    category: "table",
    title: "Bar Chair With Wood Legs",
    description: "Product Details ",
    li1: "Seating Capacity: 2",
    li2: "Weight Capacity: 550 lb.",
    li3: "Adult Assembly Required: Yes",
    price: "50.00",
    status: true,
    link1: "Select options",
  },
  {
    id: "12",
    img: "https://mydecor-be87.kxcdn.com/mydecor/wp-content/uploads/2021/01/6-450x450.jpg",
    time: "",
    category: "table",
    title: "Makeup Dressing Set Table",
    description: "Product Details ",
    li1: "Seating Capacity: 2",
    li2: "Weight Capacity: 550 lb.",
    li3: "Adult Assembly Required: Yes",
    price: "240.00",
    status: true,
    link2: "Add to cart",
  },
  {
    id: "13",
    img: "https://mydecor-be87.kxcdn.com/mydecor/wp-content/uploads/2021/01/25-450x450.jpg",
    time: "",
    category: "table",
    title: "Modern Chair, Wood Arms",
    description: "Product Details ",
    li1: "Seating Capacity: 2",
    li2: "Weight Capacity: 550 lb.",
    li3: "Adult Assembly Required: Yes",
    price: "120.00",
    status: true,
    link1: "Read more",
  },
  {
    id: "14",
    img: "https://mydecor-be87.kxcdn.com/mydecor/wp-content/uploads/2021/01/3-450x450.jpg",
    time: "",
    category: "table",
    title: "Modern Chair for Kitchen",
    description: "Product Details ",
    li1: "Seating Capacity: 2",
    li2: "Weight Capacity: 550 lb.",
    li3: "Adult Assembly Required: Yes",
    price: "60.00",
    status: true,
    link2: "Add to cart",
  },
  {
    id: "15",
    img: "https://mydecor-be87.kxcdn.com/mydecor/wp-content/uploads/2021/01/31-450x450.jpg",
    time: "",
    category: "table",
    title: "Meeting Table Set 4 Chairs",
    description: "Product Details ",
    li1: "Seating Capacity: 2",
    li2: "Weight Capacity: 550 lb.",
    li3: "Adult Assembly Required: Yes",
    price: "250.00",
    status: true,
    link2: "Add to cart",
  },
  {
    id: "16",
    img: "https://mydecor-be87.kxcdn.com/mydecor/wp-content/uploads/2021/01/27-450x450.jpg",
    time: "",
    category: "table",
    title: "Traditional Fabric Chair",
    description: "Product Details ",
    li1: "Seating Capacity: 2",
    li2: "Weight Capacity: 550 lb.",
    li3: "Adult Assembly Required: Yes",
    price: "120.00",
    status: true,
    link1: "Select options",
  },
  {
    id: "17",
    img: "https://mydecor-be87.kxcdn.com/mydecor/wp-content/uploads/2021/01/13-450x450.jpg",
    time: "",
    title: "Sofa Couch from Korean",
    description: "Product Details ",
    li1: "Seating Capacity: 2",
    li2: "Weight Capacity: 550 lb.",
    li3: "Adult Assembly Required: Yes",
    category: "sofa&bed",
    previousprice: "$140.00",
    price: "99.00",
    status: true,
    link2: "Add to cart",
  },
  {
    id: "18",
    img: "https://demo.theme-sky.com/mydecor/wp-content/uploads/2021/01/48-450x450.jpg",
    time: "",
    title: "Sofas Outdoor with Table",
    description: "Product Details ",
    li1: "Seating Capacity: 2",
    li2: "Weight Capacity: 550 lb.",
    li3: "Adult Assembly Required: Yes",
    category: "sofa&bed",
    price: "240.00",
    status: "In Stock",
    link1: "Select options",
  },
  {
    id: "19",
    img: "https://mydecor-be87.kxcdn.com/mydecor/wp-content/uploads/2021/01/10-450x450.jpg",
    time: "",
    title: "Rivet Thomas Sofa Couch",
    description: "Product Details ",
    li1: "Seating Capacity: 2",
    li2: "Weight Capacity: 550 lb.",
    li3: "Adult Assembly Required: Yes",
    category: "sofa&bed",
    price: "50.00",
    status: true,
    link2: "Buy product",
  },
  {
    id: "20",
    img: "https://mydecor-be87.kxcdn.com/mydecor/wp-content/uploads/2021/12/61-450x450.jpg",
    time: "",
    title: "Classic Armchair Leather",
    description: "Product Details ",
    li1: "Seating Capacity: 2",
    li2: "Weight Capacity: 550 lb.",
    li3: "Adult Assembly Required: Yes",
    category: "sofa&bed",
    previousprice: "$399.00",
    price: "199.00",
    status: true,
    link2: "Add to cart",
  },
  {
    id: "21",
    img: "https://mydecor-be87.kxcdn.com/mydecor/wp-content/uploads/2021/01/18-450x450.jpg",
    time: "",
    title: "Bed Full Set from Italia",
    description: "Product Details ",
    li1: "Seating Capacity: 2",
    li2: "Weight Capacity: 550 lb.",
    li3: "Adult Assembly Required: Yes",
    category: "sofa&bed",
    previousprice: "$599.00",
    price: "499.00",
    status: true,
    link2: "Add to cart",
  },
  {
    id: "22",
    img: "https://mydecor-be87.kxcdn.com/mydecor/wp-content/uploads/2020/08/14-450x450.jpg",
    time: "",
    title: "Upholstered Panel Bed",
    description: "Product Details ",
    li1: "Seating Capacity: 2",
    li2: "Weight Capacity: 550 lb.",
    li3: "Adult Assembly Required: Yes",
    category: "sofa&bed",
    price: "450.00",
    status: true,
    link1: "Select options",
  },
  {
    id: "23",
    img: "https://mydecor-be87.kxcdn.com/mydecor/wp-content/uploads/2021/01/41-450x450.jpg",
    time: "",
    title: "Bed with Mattress Foundation",
    description: "Product Details ",
    li1: "Seating Capacity: 2",
    li2: "Weight Capacity: 550 lb.",
    li3: "Adult Assembly Required: Yes",
    category: "sofa&bed",
    price: "180.00",
    status: true,
    link2: "Add to cart",
  },
  {
    id: "24",
    img: "https://mydecor-be87.kxcdn.com/mydecor/wp-content/uploads/2021/01/40-450x450.jpg",
    time: "",
    title: "New 4-in-1 Baby Crib",
    description: "Product Details ",
    li1: "Seating Capacity: 2",
    li2: "Weight Capacity: 550 lb.",
    li3: "Adult Assembly Required: Yes",
    category: "sofa&bed",
    price: "130.00",
    status: true,
    link1: "Select options",
  },
];
export default products;

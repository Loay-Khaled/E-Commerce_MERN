import productModel from "../models/productModel";

export const getAllProducts = async () => {
  return await productModel.find();
};

export const seedInitialProducts = async () => {
  try {
    const products = [
      {
        title: "Dell Laptop",
        image:
          "https://i.dell.com/is/image/DellContent/content/dam/ss2/product-images/page/category/laptop/xps/fy24-family-launch/prod-312204-laptop-xps-16-9640-14-9440-13-9340-sl-800x620.png?fmt=png-alpha&wid=800&hei=620",
        price: 15000,
        stock: 10,
      },

      {
        title: "Asus Laptop",
        image:
          "https://dlcdnwebimgs.asus.com/gain/4cc342ab-c4fa-42a9-8619-a340f6119bec/w800",
        price: 25000,
        stock: 20,
      },

      {
        title: "HP Laptop",
        image:
          "https://www.hp.com/wcsstore/hpusstore/Treatment/mdps/Q2FY23_Probook_Series_G10_Redesign/Commercial.jpg",
        price: 40000,
        stock: 8,
      },
    ];

    const existingProducts = await getAllProducts();

    if (existingProducts.length === 0) {
      await productModel.insertMany(products);
    }
  } catch (err) {
    console.error("cannot see database", err);
  }
};

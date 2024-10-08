
const jsonData = {
    "Catalog": {
        "Products": [
            {
                "ProductID": "101",
                "Name": "SmartPhone",
                "Category": "Electronics",
                "Price": 299.99,
                "Stock": 25,
                "Description": "Realme GT Master Edition",
                "image-url": "https://www.realme.com/ph/realme-gt-master-edition"
            },
            {
                "ProductID": "102",
                "Name": "Laptop",
                "Category": "Electronics",
                "Price": 799.99,
                "Stock": 15,
                "Description" : "Acer Nitro 5 | 17-inch i7 Gaming Laptop",
                "image-url": "https://www.acer.com/ph-en/laptops/nitro/nitro-5"
            }
        ]
    }
};

const getJsonData = () => jsonData;

module.exports = { getJsonData };

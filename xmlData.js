const xmlData = `
<Catalog> 
    <Product ProductID="101">
        <Name>SmartPhone</Name>
        <Category>Electronics</Category>
        <Price>299.99</Price>
        <Stock>25</Stock>
        <Description>Realme GT Master Edition"</Description>
        <image-url>https://www.realme.com/ph/realme-gt-master-edition</image-url>
    </Product>
    <Product ProductID="102">
        <Name>Laptop</Name>
        <Category>Electronics</Category>
        <Price>799.99</Price>
        <Stock>15</Stock>
        <Description>Acer Nitro 5 | 17-inch i7 Gaming Laptop</Description>
        <image-url>https://www.acer.com/ph-en/laptops/nitro/nitro-5</image-url>
    </Product>
</Catalog>`;

const getXmlData = () => xmlData;

module.exports = { getXmlData };

export default function Product() {

    // const products = ["Laptop", "Phone", "Modem", "Computer"];
    const products = [{id:1,name:"Laptop", price: 500},{id:2,name:"Computer", price: 100}];
    const productList = products.map((product, i) => {
            return <h3 key={product.id}>{product.name}: ${product.price}</h3>
        })

    return (
        <div>
            {productList}
        </div>
    );
}
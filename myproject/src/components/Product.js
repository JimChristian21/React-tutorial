export default function Product() {

    const products = ["Laptop", "Phone", "Modem"];
    const productList = products.map((product, i) => {
            return <h3 key={i}>{product}</h3>
        })

    return (
        <div>
            {productList}
        </div>
    );
}
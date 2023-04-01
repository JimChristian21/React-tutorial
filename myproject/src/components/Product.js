export default function Product() {

    // const products = ["Laptop", "Phone", "Modem", "Computer"];
    const products = [
        {id:1,name:"Laptop", price: 500},
        {id:2,name:"Computer", price: 100}
    ];

    const fruits = ['Apple', 'Mango', 'Banana'];

    const fruitList = fruits.map((fruit, i) => {
            return <h3 key={i}>{fruit}</h3>
        })

    return (
        <div>
            {fruitList}
        </div>
    );
}
import "./Product.css";
import Price from "./Price";
function Product({title,idx}){
    //  const list = features.map((feature) => (
    //     <li key={feature}>{feature}</li>
    // ));
    // let isDiscount = price > 30000;
    // let styles = { backgroundColor: isDiscount ? "lightblue" : ""};


    let oldPrices = ["5000","25000","75000","1000"];
    let newPrices = ["4500","24000","72000","750"];
    let description = ["Good looks","Looks cools and durable","Gaming and efficient","wireless"];
    return(
        <div className="Product">
            {/* <h3>{title}</h3>
            <h5>Price: {price}</h5>
            <p>{list}</p>
            {isDiscount ? <p>"Discount of 5%"</p>: null} */}
            <h4>{title}</h4>
            <p>{description[idx]}</p>
            <Price oldPrice={oldPrices[idx]} newPrice={newPrices[idx]}/>
        </div>
    );
}

export default Product;
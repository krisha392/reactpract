import Product from "./product";

function ProductTab(){
    // let options=["hitech", "fast", "durable" ];
    let styles = {
        display:"flex",
        flexWrap: "wrap",
        justifyContent: "center",
        alignItems: "center",
    };
    return(
      //   <>
      //   {/* <Product title="mobile" price={25000} features={["hitech", "fast"]} /> */}
      //   {/* <Product title="mobile" price={25000} features={options} />
      //   <Product title="laptop" price={65000}/>
      //   <Product title="mouse" price={5000}/> */}
      // </>
         <div style={styles}>
        <Product title="Watch" idx={0}/>
        <Product title="Mobile" idx={1}/>
        <Product title="Laptop" idx={2}/>
        <Product title="Mouse" idx={3}/>
      </div>
    );
}

export default ProductTab;
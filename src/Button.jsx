function printHelloClick(){
    console.log("Hello!!!");
}

function printByeMouseover(){
    console.log("BYE!!!!");
}



export default function Button(){
    return(
        <div>
            <button onClick={printHelloClick}>CLick</button>
            <p onMouseOver={printByeMouseover}>event demo!!</p>
        </div>
    );
}
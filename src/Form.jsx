function handleFormSubmit(){
    event.preventDefault();
    console.log("Form Submitted");
}

export default function Form() {
    return(
        <form onSubmit={handleFormSubmit}>
            <input placeholder="hey!!"/>
            {/* <button onClick={handleFormSubmit}>Submit</button> */}
            <button>Submit</button>
        </form>
    );
}
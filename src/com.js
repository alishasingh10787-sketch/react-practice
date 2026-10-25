function Exporting() {
    return (
        <div>
            <h1>Exporting</h1>
        </div>
    )
}
export function Username(props) {
    console.log(props);

    return (
        <div>
            <h1>Username: {props.name}</h1>
            <h2>Age: {props.age}</h2>
            <h3>City: {props.city}</h3>
        </div>
    )

}



export default Exporting;

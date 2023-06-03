export default function Card(props) {
    return(
        <div>
            <h2>Hola {props.name}</h2>
            <p>Tu pelicula favorita es</p>
            <hr />
            <h3>{props.film}</h3>
        </div>
    )
}
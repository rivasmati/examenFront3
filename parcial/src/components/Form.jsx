export default function Form(props) {

    return(
        <form onSubmit={props.handleSubmit} className="form">
            <label htmlFor="name">Nombre</label>
            <input 
            type="text"
            value={props.name}
            placeholder= 'Ej: Matias'
            onChange={props.onChangeName}
            />

            <label htmlFor="film">Pelicula</label>
            <input 
            type="text"
            value={props.film}
            placeholder= 'Ej: Rapidos y Furiosos'
            onChange={props.onChangeFilm}
            />
            
            <button>Enviar</button>


        </form>
    )
}
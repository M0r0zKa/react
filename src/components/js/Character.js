function Character(props) {

    let {id,name,status,species,gender,image} = props;
    return(
        <div>

            <h2>{name}</h2>
            <p>{status}</p>
            <p>{species}</p>
            <p>{gender}</p>
            <img src={image}/>

        </div>
    )

}

export default Character
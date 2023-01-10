const Cat = (props)=> {
    return (
        <div className="card col-sm-4">
            <div className="card-header">
                <h2>{props.id}</h2>
            </div>
            <div className="card-body">
                {props.image && <img  className="img-fluid" src={props.image} alt=""/>}
            </div>
        </div>
    )
}

export default Cat
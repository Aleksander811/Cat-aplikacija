const Limit = (props)=> {
    const limitHandler = (event)=> {
        props.limitChange(event.target.value)
    }
    
    return (

            <form onSubmit={limitHandler}>
                <select className="form-control mb-3" onChange={limitHandler}>
                    <option selected disabled>Pasirinkite limitą</option>
                    <option value="1">1</option>
                    <option value="10">10</option>
                </select>
            </form>

    )
}

export default Limit
function TickListFilter () {
    return (
        <div>
        <form>
            <label>Filter By</label>
            <select name="filter_climb">
                <option>Filter By</option>
                <option>Grade</option>
                <option>Type</option>
                <option>Completed</option>
            </select>
            <label>Search</label>
            <input placeholder= "Climb Name" type= "text" name="name"></input>
        </form>
        </div>
    )

}
export default TickListFilter
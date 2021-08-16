
function Listtasks (props){ //Listtasks component
    const tasks = props.tasks
    const deletetask = props.deletetask
return (

    <li onClick={deletetask}>{tasks}</li>


);
}



export default Listtasks;

function Addtasks (props){ // addtasks component
    const addtasks = props.addtasks
    return (
    <div>
    <header>Todo App</header>
    <input id="event" type="text" placeholder="Add your new todo"></input>
    <button  onClick={addtasks} className="fas fa-plus" ></button>
    </div>
       
    
    
    )
    }
    



    export default Addtasks;
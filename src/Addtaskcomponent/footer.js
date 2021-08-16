
function Footer(props){ //footer component 
    const deleteAlltask = props.deleteAlltask
        
    return(

<div className="footer">
    <span>Clear your <span className="pendingTasks"></span> tasks</span>
    <button onClick={deleteAlltask}>Clear All</button>
  </div>

    )
}




export default Footer;
import React from 'react';
import Addtasks from './addtask';
import Footer from './footer';
import Listtasks from './ListTasks';




export class Todo extends React.Component{

    state = {
         tasks : [
              
            
        ]
    }
 
    deleteAlltask = ()=>{ //function delete
     
        let ul = document.querySelector('ul').childElementCount
        let ul2 = document.querySelector('ul')
     if(ul==1){
         alert('there is no data to remove ')
     }else{
        ul2.style.display="none";
        alert('done')
        window.location.reload(false);
     }
     
       }
    


    deletetask = (index)=>{ //function delete
        let tasks = this.state.tasks 
        alert('Delete is done')
       tasks.splice(index,1)
       this.setState({
           tasks
       })
       }
    
     
    addtasks=()=>{     // function add 
        const task = document.getElementById('event').value
        const tasks = this.state.tasks
    let mission = task==0?<div>{alert ('Dont enter empty data')}</div> :   tasks.push(task)
    this.setState({
        mission

    })

  
    }
  
    
render(){  //render function is render a React element into a root DOM 
   
return <div className="wrapper">
       <Addtasks addtasks={this.addtasks} ></Addtasks>
        <ul className="todoList my-3">
      {this.state.tasks.map((tasks,index)=> <Listtasks key="index" deletetask={()=> this.deletetask(index)} tasks={tasks}  />)}
      <Footer deleteAlltask={this.deleteAlltask} ></Footer>
     
    </ul>
        
        
</div>

}

}



export default Todo;
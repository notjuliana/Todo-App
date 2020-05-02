import React, { Component } from 'react'
import { BrowserRouter as Router, Route} from 'react-router-dom'
import Header from './components/Header'
import Todos from './components/Todos'
import AddTodo from './components/AddTodo'
import About from './components/pages/About'
import './App.css'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons'
import uuid from 'uuid'

library.add(faTrashAlt)

class App extends React.Component {
   
   state = {
    todos: [],
    id: uuid(),
    title: '',
    completed: false
  }
 
  
// Toggle complete
 markCompleted = (id) => {
  this.setState({ 
    todos: this.state.todos.map(todo => {
    if(todo.id === id) {
      todo.completed = !todo.completed
      
    }
    return todo;
    
  }) });

};

// Delete todo
deleteTodo = (id) => {
  this.setState({ 
    todos: [...this.state.todos.filter(todo => 
      todo.id !== id)] 
    });
}

//Add todo
AddTodo = (title) => {
  const newTodo ={
    id: uuid(),
    title,
    completed: false,
   
  }
  this.setState({ 
    todos: [...this.state.todos, newTodo] 
  });
};

// Clear list
clearList = () => {
  this.setState({
  todos: []
  });
};


  render() {
    return (
      <Router>
      <div style = {styles.container}>
        <div style = {styles.wrapper}>
        <Header />
        
        <Route exact path='/' render={props => ( 
          <React.Fragment>
           
            <AddTodo 
            AddTodo = {this.AddTodo}
            clearList = {this.clearList}
            /> 
          
            <Todos 
            todos = {this.state.todos} 
            markCompleted = {this.markCompleted}
            deleteTodo = {this.deleteTodo}
            />
            
          </React.Fragment>
          )} />
          <Route path='/about'  component = {About} />
       </div>
      </div>
      </Router>
    );
  }
}



const styles = {
  container: {
    backgroundColor: '#13C5D0',
    textAlign: 'center',
    width: '100%',
    height: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    margin: '0',
    padding: '0',
    
  },

  wrapper: {
    backgroundColor: '#292f38',
    width: '40%',
    height: '80%',
    borderRadius: '10px',
    boxShadow: '0 15px 30px rgba(0, 0, 0, 0.4)',
    padding: '20px',
    overflow: 'auto'
    
  }

  




}

export default App;



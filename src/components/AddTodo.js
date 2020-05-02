import React, { Component } from 'react'

export class AddTodo extends Component {

    state = {
        title: ''
    }

    onSubmit = (e) => {
        e.preventDefault();
        this.props.AddTodo(this.state.title);
        this.setState({ 
            title: '' ,
            
        });
    }

    onChange = (e) => 
    this.setState({ 
        title: e.target.value 
    });

    render() {
        const { clearList } = this.props;
        return (
            <div >
               
                <form onSubmit={this.onSubmit}>
                    <input 
                        type='text' 
                        name='title' 
                        placeholder='Add item...'
                        value={this.state.title}
                        onChange={this.onChange} 
                        style = {styles.addTodo}>
                        
                    </input>
                    
                    <button 
                        type='submit' 
                        style = {styles.btn}>
                       Add Item
                    </button>
                    <input
                        type = 'button' 
                        value = {'Clear All'}
                        onClick = {clearList}
                        style = {styles.btn}>
                        
                    </input>
                </form>
                   
            </div>
        )
    }
}

const styles = {
    addTodo: {
        fontSize: '15px',
        minWidth: '200px',
        width: '80%',
        padding: '10px 20px',
        backgroundColor: '#1d222b',
        border: '1px solid #444',
        borderRadius: '20px',
        outline: 'none',
        color: '#ccc',
        
    },

    btn: {
        margin: '10px',
        backgroundColor: '#259FA4',
        color: '#fff',
        padding: '10px',
        border: 'none',
        borderRadius: '20px',
        boxShadow: '0 2px 5px rgba(0, 0, 0, 0.3)',
        cursor: 'pointer',
        fontSize: '14px',
        outline: 'none'
    },

    
    

}
export default AddTodo

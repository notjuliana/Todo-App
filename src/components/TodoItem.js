import React, { Component }  from 'react'
import PropTypes from 'prop-types'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { withStyles } from '@material-ui/core/styles';
import { cyan } from '@material-ui/core/colors';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import FlipMove from 'react-flip-move';

const BlueCheckbox = withStyles({
    root: {
      color: cyan[400],
      marginLeft: '20px',
      '&$checked': {
        color: cyan[600],
      },
    },
    checked: {},  
  })((props) => <Checkbox color="default" {...props} />);
 

class TodoItem extends Component {
getStyle = () => {
        return {
        textDecorationLine: this.props.todo.completed ? 'line-through' : 'none',
        textDecorationColor: '#00acc1',
        padding: '0px'
    }  
}


    render() {
        
        return (
        <FlipMove>
            <div style={this.getStyle()}>
                
                <div style={{ position: 'relative', display: 'flex', margin: '10px 20px', backgroundColor: '#1d222b', padding: '0px 0px',  borderRadius: '20px', border: '1px solid #444',}}>
                
                <FormControlLabel   
                    control={<BlueCheckbox
                    onChange = {this.props.markCompleted.bind(this, this.props.todo.id)}
                        />}
                />

                    <p style={{color: '#ccc', fontSize: '18px', padding: '10px', fontFamily: 'Roboto'}}> 
                  {this.props.todo.title}
                
                    <span style = {{color: '#bbb', position: 'absolute', right: '30px', margin: 'auto', fontSize: '18px'}}
                    onClick = {this.props.deleteTodo.bind(this, this.props.todo.id)}>
                    <FontAwesomeIcon icon="trash-alt" />
                    </span>
                    </p>
                    </div>
                   
            </div>
           </FlipMove>  
        )
    }
}

  

TodoItem.propTypes = {
    todo: PropTypes.array.isRequired
  }


export default TodoItem

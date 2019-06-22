import React from 'react'
import { connect } from 'react-redux'
import { toggleTodo } from '../../actions'

const Todo = props => {
  const { id, todo, handleClickTodo } = props
  return (
    <div>
      <label>
        <input
          type="checkbox"
          value={todo.value}
          onChange={() => handleClickTodo(id)} 
        />
        {todo.value}
      </label>
    </div>
  )
}

const TodosContainer = props => {
  const handleClickTodo = index => {
    props.toggleTodo(index)
  }

  return (
    <div>
      {props.todos.map((todo, index) => (
        <Todo
          key={index} 
          id={index} 
          todo={todo} 
          handleClickTodo={handleClickTodo}
        />
      ))}
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    todos: state.todos,
  }
}

export default connect(mapStateToProps, { toggleTodo, })(TodosContainer)

import React from 'react'
import { connect } from 'react-redux'
import { toggleTodo } from '../../actions'

const TodosContainer = props => {
  const handleClickTodo = index => {
    props.toggleTodo(index)
  }

  return (
    <div>
      {props.todos.map((todo, index) => (
        <p
          key={index}
          style={todo.completed ? { textDecoration: 'line-through' } : null}
          onClick={() => handleClickTodo(index)}
        >
          {todo.value}
        </p>
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

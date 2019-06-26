import React from 'react'
import { connect } from 'react-redux'
import { toggleTodo } from '../../actions'

import {
  TodoListWrapper,
  TodoWrapper,
  TodoValue,
  TodoCheckbox
} from './styled'

const Todo = props => {
  const { id, todo, handleClickTodo } = props
  return (
    <TodoWrapper>
      <TodoCheckbox
        name={id}
        type="checkbox"
        value={todo.value}
        checked={todo.completed}
        onChange={() => handleClickTodo(id)}
      />
      <TodoValue htmlFor={id}>{todo.value}</TodoValue>
    </TodoWrapper>
  )
}

const TodosContainer = props => {
  const handleClickTodo = index => {
    props.toggleTodo(index)
  }

  return (
    <TodoListWrapper>
      {props.todos.map((todo, index) => (
        <Todo
          key={index} 
          id={index} 
          todo={todo} 
          handleClickTodo={handleClickTodo}
        />
      ))}
    </TodoListWrapper>
  )
}

const mapStateToProps = (state) => {
  return {
    todos: state.todos,
  }
}

export default connect(mapStateToProps, { toggleTodo, })(TodosContainer)

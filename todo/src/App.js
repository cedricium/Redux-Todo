import React, { useState } from 'react'
import { connect } from 'react-redux'
import { addTodo, toggleTodo } from './actions'

function App(props) {
  const [todo, setTodo] = useState('')

  const handleSubmitTodo = e => {
    e.preventDefault()
    props.addTodo({
      value: todo,
      completed: false,
    })
    setTodo('')
  }

  const handleClickTodo = index => {
    props.toggleTodo(index)
  }

  return (
    <div className="App">
      <h2>Get Sh*t Done</h2>
      <form onSubmit={e => handleSubmitTodo(e)}>
        <input
          type="text"
          value={todo}
          onChange={e => setTodo(e.target.value)}
        />
        <input
          type="submit"
          value="Add Todo"
        />
      </form>
      <div>
        {props.todos.map((todo, index) => (
          <p
            key={index}
            style={todo.completed ? { textDecoration: 'line-through'} : null }
            onClick={() => handleClickTodo(index)}
          >
            {todo.value}
          </p>
        ))}
      </div>
    </div>
  )
}

const mapStateToProps = (state) => {
  return {
    todos: state.todos,
  }
}

export default connect(mapStateToProps, { addTodo, toggleTodo, })(App)

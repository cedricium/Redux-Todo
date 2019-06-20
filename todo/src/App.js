import React, { useState } from 'react'
import { connect } from 'react-redux'
import { addTodo } from './actions'
import TodosContainer from './components/TodosContainer'

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
      <TodosContainer />
    </div>
  )
}

export default connect(null, { addTodo })(App)

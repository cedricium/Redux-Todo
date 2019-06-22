import React, { useState } from 'react'
import { connect } from 'react-redux'
import { addTodo } from './actions'
import TodosContainer from './components/TodosContainer'

import styled from 'styled-components'

const TodoAppWrapper = styled.main`
  background: #ffffff;
  width: 100%;
  max-width: 65rem;
  margin: 0 auto;
  border-radius: 0.75rem;
`

const TodoContainer = styled.div`
  padding: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
`

const TodoForm = styled.form``

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
    <TodoAppWrapper>
      <TodoContainer>
        <h2>Get Sh*t Done</h2>
        <TodoForm onSubmit={e => handleSubmitTodo(e)}>
          <input
            type="text"
            value={todo}
            onChange={e => setTodo(e.target.value)}
          />
          <input
            type="submit"
            value="Add Todo"
          />
        </TodoForm>
        <TodosContainer />
      </TodoContainer>
    </TodoAppWrapper>
  )
}

export default connect(null, { addTodo })(App)

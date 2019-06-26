import styled from 'styled-components'

const TodoListWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
`

const TodoWrapper = styled.div`
  width: 100%;
  padding: 0.75rem;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
`

const TodoValue = styled.label`
  margin-left: 0.5rem;
  width: 100%;
  overflow-wrap: break-word;
`

const TodoCheckbox = styled.input`
  &:checked + ${TodoValue} {
    text-decoration: line-through;
  }
`

export {
  TodoListWrapper,
  TodoWrapper,
  TodoValue,
  TodoCheckbox,
}

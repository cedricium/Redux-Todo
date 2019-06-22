import styled from 'styled-components'

const TodoListWrapper = styled.div`
  width: 100%;
  max-width: 80rem;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
`

const TodoWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
`

const TodoValue = styled.label`
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

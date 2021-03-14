import React, { useState } from 'react'
import styled from 'styled-components'
import { useDispatch, useSelector } from 'react-redux'
import { actionCreators } from '../state'

interface ListState {
  search: string
}

const Button = styled.button`
  background: transparent;
  border-radius: 13px;
  border: 2px solid red;
  color: green;
  margin: 1em 1em;
  padding: 0.25em 1em;
`
export const RepositoriesList: React.FC = () => {
  const [search, setSearch] = useState<string>('')

  const dispatch = useDispatch()
  const { loading, error, data } = useSelector(
    (state: any) => state.repositories
  )
  console.log(data)

  const onSubmit = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault()
    dispatch(actionCreators.searchRepositories(search))
  }
  return (
    <div>
      search
      <input
        type='text'
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />{' '}
      <Button onClick={onSubmit}> submit</Button>
      {loading ? '...loading' : null}
      <ol>{data && data.map((result: string) => <li>{result}</li>)}</ol>
    </div>
  )
}

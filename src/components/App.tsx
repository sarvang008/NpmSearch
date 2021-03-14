import './App.css'

import { Provider } from 'react-redux'
import { store } from '../state'
import { RepositoriesList } from './RepositoriesList'

function App() {
  return (
    <Provider store={store}>
      <h1>search Repositories</h1>
      <RepositoriesList />
    </Provider>
  )
}

export default App

import axios from 'axios'
import { ActionTypes } from '../action-types'
import { Action } from '../actions'
import { Dispatch } from 'redux'

export const searchRepositories = (term: string) => {
  return async (dispatch: Dispatch<Action>) => {
    dispatch({ type: ActionTypes.SEARCH_REPOSITORIES })

    try {
      const { data } = await axios.get(
        'https://registry.npmjs.com/-/v1/search',
        {
          params: {
            text: term,
          },
        }
      )
      console.log(data.objects)

      const repoName = data.objects.map((result: any) => {
        return result.package.name
      })
      dispatch({
        type: ActionTypes.SEARCH_REPOSITORIES_SUCCESS,
        payload: repoName,
      })
    } catch (error) {
      dispatch({
        type: ActionTypes.SEARCH_REPOSITORIES_ERROR,
        payload: error.message,
      })
    }
  }
}

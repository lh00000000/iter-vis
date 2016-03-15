import {List, Map, fromJS} from 'immutable'

const DEFAULT_STATE = Map()

export default function(state = DEFAULT_STATE, action) {
  switch (action.type) {
    case 'ACTION':
      return state.merge({
        actioned: true
      })
  }
  return state;
}
const TESTACTION = 'TESTACTION'

const initState = {
  name: 'shisan'
}

export default function user(state = initState, action) {
  switch(action.type) {
    default: 
      return state
  }
}

export function setUsrName(name) {
  return {
    type: TESTACTION,
    data: name
  }
}
const TESTACTION = 'TESTACTION'

const initState = {
  name: 'shisan,shop'
}

export default function shop(state = initState, action) {
  switch(action.type) {
    default: 
      return state
  }
}

export function setShopName(name) {
  return {
    type: TESTACTION,
    data: name
  }
}
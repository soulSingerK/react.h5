const PATH = '../container'
const requireAll = context => context.keys().map(context)

const component = require.context('../container', false)

requireAll(component).forEach(({ default: item }) => {
  console.log(item)
})
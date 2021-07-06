const files = require.context('.', false, /\.ts$/)
const modules: any = {}

files.keys().forEach((key) => {
  if (key === './index.ts') return
  modules[key.toLowerCase().replace(/(\.\/|\.ts)/g, '')] = files(key).default
})

export default modules

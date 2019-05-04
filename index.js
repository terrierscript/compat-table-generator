const bcd = require("mdn-browser-compat-data")
const target = bcd.javascript.builtins.Array.flat

const head = (name) => {
  return `![${name}][${name.toLowerCase()} - image]`
}
const browsers = ["Chrome", "Edge", "Firefox", "IE", "Opera", "Safari"]

browsers.map((name) => {
  console.log(target.__compat.support[name.toLowerCase()])
  return {
    name: 
  }
})

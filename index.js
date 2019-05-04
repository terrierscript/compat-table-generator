const bcd = require("mdn-browser-compat-data")
// const table = require("markdown-table")

const generate = (category, fnName) => {
  const target = bcd.javascript.builtins[category][fnName]
  const browserIcon = (name) => {
    return `![${name}][${name.toLowerCase()}-image]`
  }
  const browsers = ["Chrome", "Edge", "Firefox", "IE", "Opera", "Safari"]

  const toTable = (versions) => {
    return versions
      .reduce(
        (curr, { name, version }, i) => {
          curr[0][i] = browserIcon(name)
          curr[1][i] = ":-:"
          curr[2][i] = version
          return curr
        },
        [[], [], []]
      )
      .map((row) => {
        return row.join(" | ") + " |"
      })
      .join("\n")
  }

  const supportTable = browsers.map((name) => {
    const support = target.__compat.support[name.toLowerCase()]
    const version = support.version_added ? `${support.version_added} ✔` : "✖"

    return {
      name,
      version
    }
  })
  const head = `#### Browser Support for \`${category}.prototype.${fnName}\`\n`
  console.log(head)
  console.log(toTable(supportTable))
}

generate("Array", "flat")

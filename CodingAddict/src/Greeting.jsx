import React from "react"

const Greeting = () => {
  return React.createElement(
    "header",
    {},
    React.createElement("h1", {}, "Softstribe Apps"),
    React.createElement(
      "p",
      { className: "tagline" },
      "Freeware software apps and android"
    )
  )
}

export default Greeting

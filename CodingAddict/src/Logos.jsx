import React from "react"
import reactLogo from "./assets/react.svg"

const Logos = () => {
  return React.createElement(
    "div",
    {},
    React.createElement(
      "a",
      { href: "https://vitejs.dev" },
      React.createElement("img", {
        src: "/vite.svg",
        target: "_blank",
        alt: "Vite Logo",
        className: "logo",
      })
    ),
    React.createElement(
      "a",
      { href: "https://vitejs.dev" },
      React.createElement("img", {
        src: { reactLogo },
        target: "_blank",
        alt: "Vite Logo",
        className: "logo",
      })
    )
  )
}
export default Logos

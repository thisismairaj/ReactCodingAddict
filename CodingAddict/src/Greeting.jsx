import React from "react"

const Greeting = () => {
  return (
    <div>
      <Person />
      <PersonDescription />
      <PersonWebsite />
    </div>
  )
}

const Person = () => {
  return <h3>John Doe</h3>
}
const PersonDescription = () => {
  return (
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique ratione
      nostrum minima aspernatur odit reprehenderit, quae deleniti incidunt amet
      magni.
    </p>
  )
}

const PersonWebsite = () => {
  return (
    <>
      <a href="#">My Website</a>
      <br />
      <a href="#">My FB</a>
    </>
  )
}

export default Greeting

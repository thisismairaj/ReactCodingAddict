import React from "react"
import { books } from "./books"
import Book from "./Book"

const Booklist = () => {
  return (
    <React.Fragment>
      <h1>amazon best sellers</h1>
      <section className="booklist">
        {books.map((book, index) => {
          return <Book {...book} key={book.id} number={index} />
        })}
      </section>
    </React.Fragment>
  )
}
export default Booklist

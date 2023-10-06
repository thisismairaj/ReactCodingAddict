import { books } from "./books"
import Book from "./Book"

const Booklist = () => {
  const getBook = (id) => {
    const book = books.find((book) => book.id === id)
    console.log(book)
  }
  return (
    <section className="booklist">
      {books.map((book, index) => {
        return <Book {...book} key={index} getBook={getBook} />
      })}
    </section>
  )
}
export default Booklist

import Book from "./Book"

const books = [
  {
    id: 1,
    author: "Jordan Moore",
    title: "Facts For Curious Minds",
    img: "./images/book-1.jpg",
  },
  {
    id: 2,
    author: "James Clear",
    title: "Atomic Habits",
    img: "https://images-na.ssl-images-amazon.com/images/I/81wgcld4wxL._AC_UL900_SR900,600_.jpg",
  },
  {
    id: 3,
    author: "Quaid e Azam",
    title: "Pakistan Independence",
    img: "https://images-na.ssl-images-amazon.com/images/I/81wgcld4wxL._AC_UL900_SR900,600_.jpg",
  },
]

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

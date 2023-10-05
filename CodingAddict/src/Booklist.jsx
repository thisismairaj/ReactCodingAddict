import Book from "./Book"

const books = [
  {
    author: "Jordan Moore",
    title: "Facts For Curious Minds",
    img: "./images/book-1.jpg",
  },
  {
    author: "James Clear",
    title: "Atomic Habits",
    img: "https://images-na.ssl-images-amazon.com/images/I/81wgcld4wxL._AC_UL900_SR900,600_.jpg",
  },
  {
    author: "Quaid e Azam",
    title: "Pakistan Independence",
    img: "https://images-na.ssl-images-amazon.com/images/I/81wgcld4wxL._AC_UL900_SR900,600_.jpg",
  },
]

const Booklist = () => {
  return (
    <section className="booklist">
      {books.map((book, index) => {
        const { title, author, img } = book
        return <Book key={index} title={title} author={author} img={img} />
      })}
    </section>
  )
}
export default Booklist

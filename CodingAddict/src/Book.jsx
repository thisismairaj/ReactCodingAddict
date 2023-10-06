const Book = (props) => {
  const { title, img, author, getBook, id } = props
  const getSingleBook = () => {
    getBook(id)
  }
  // console.log(props)
  return (
    <article className="book">
      <img src={img} alt={title} />
      <h3>{title}</h3>
      <h4>{author.toUpperCase()}</h4>
      <button onClick={getSingleBook}>Click</button>
    </article>
  )
}
export default Book

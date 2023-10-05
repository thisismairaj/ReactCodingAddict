const Book = () => {
  const title = "Interesting Facts For Curious Minds"
  const author = "Benjamin Franklin"
  return (
    <article className="book">
      <img src="./images/book-1.jpg" />
      <h3>{title}</h3>
      <h4>{author.toUpperCase()}</h4>
    </article>
  )
}
export default Book

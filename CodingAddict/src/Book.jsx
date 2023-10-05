const Book = (props) => {
  const { title, img, author } = props
  return (
    <article className="book">
      <img src={img} alt={title} />
      <h3>{title}</h3>
      <h4>{author.toUpperCase()}</h4>
    </article>
  )
}
export default Book

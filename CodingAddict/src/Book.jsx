const Book = (props) => {
  const { title, img, author, id, number } = props
  // console.log(props)
  return (
    <article className="book">
      <img src={img} alt={title} />
      <h3>{title}</h3>
      <h4>{author.toUpperCase()}</h4>
      <span className="number">{`# ${number + 1} `}</span>
    </article>
  )
}
export default Book

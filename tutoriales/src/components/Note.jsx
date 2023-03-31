
const Note = ({content, date}) => {
  return (
    <div>
        <p>{content}</p>
        <small>
            <time>{date}</time>
        </small>
    </div>
  )
}

export default Note
export const SmallContainer = ({ onClick, title, btnText, content }) => (
  <div className='small-container'>
    <h2> {title} </h2>
    <button className='action-btn' onClick={onClick}>
      {btnText}
    </button>
    <div>{content} </div>
  </div>
)

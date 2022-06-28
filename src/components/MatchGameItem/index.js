import './index.css'

const MatchGameItem = props => {
  const {imageDetails, onClickThumbnail} = props
  const {id, thumbnailUrl} = imageDetails

  const onClickThumbnailItem = () => {
    onClickThumbnail(id)
  }

  return (
    <li className="thumbnail-container">
      <button type="button" className="button">
        <img
          className="thumbnail-image"
          src={thumbnailUrl}
          alt="thumbnail"
          onClick={onClickThumbnailItem}
        />
      </button>
    </li>
  )
}

export default MatchGameItem

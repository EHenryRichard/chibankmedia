import './BrandMark.css'

function BrandMark() {
  return (
    <span className="wordmark" aria-hidden="true">
      <span className="wordmark-name">Chibankz</span>
      <span className="wordmark-signature">
        <span className="wordmark-rule" />
        <span className="wordmark-media">Media</span>
        <span className="wordmark-rule" />
      </span>
    </span>
  )
}

export default BrandMark

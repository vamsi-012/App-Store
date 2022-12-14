// Write your code here
import './index.css'

const AppItem = props => {
  const {appDetails} = props
  const {appName, imageUrl, category} = appDetails

  return (
    <li className="app-card-container">
      <img
        category={category}
        alt={appName}
        src={imageUrl}
        className="app-logo"
      />
      <p className="app-name">{appName}</p>
    </li>
  )
}

export default AppItem

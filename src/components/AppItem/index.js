// Write your code here
import './index.css'

const AppItem = props => {
  const {appsListDetails} = props
  const {appName, imageUrl} = appsListDetails
  return (
    <li className="app-container">
      <img src={imageUrl} alt={appName} className="app-image" />
      <p className="app-name">{appName}</p>
    </li>
  )
}

export default AppItem

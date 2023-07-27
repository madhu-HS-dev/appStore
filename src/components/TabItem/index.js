// Write your code here
import './index.css'

const TabItem = props => {
  const {tabsListDetails, onChangeTabs} = props
  const {displayText, tabId} = tabsListDetails

  const onChangeAppContainer = () => {
    onChangeTabs(tabId)
  }

  return (
    <li>
      <button type="button" className="button" onClick={onChangeAppContainer}>
        {displayText}
      </button>
    </li>
  )
}

export default TabItem

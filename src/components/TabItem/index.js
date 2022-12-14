// Write your code here
import './index.css'

const TabItem = props => {
  const {isActiveTab, tabDetails, updateTabItem} = props
  const {tabId, displayText} = tabDetails
  const activeTabClassName = isActiveTab ? 'active-tab-item' : ''
  const activeTabButtonClassName = isActiveTab ? 'active-tab-btn' : ''

  const onClickTabItem = () => {
    updateTabItem(tabId)
  }

  return (
    <li onClick={onClickTabItem} className={`tab-item ${activeTabClassName}`}>
      <button
        type="button"
        className={`tab-button ${activeTabButtonClassName}`}
      >
        <h1 className="tab-heading">{displayText}</h1>
      </button>
    </li>
  )
}

export default TabItem

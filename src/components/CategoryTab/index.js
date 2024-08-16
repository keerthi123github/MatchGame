import './index.css'

const CategoryTab = props => {
  const {eachTab, isActiveTab, onClickTab} = props
  const {tabId, displayText} = eachTab

  const tabClassName = isActiveTab ? 'active-tab-button' : 'tab-button'

  const onClick = () => onClickTab(tabId)

  return (
    <li className="category-tab-item">
      <button type="button" className={tabClassName} onClick={onClick}>
        <p className="tab-name">{displayText}</p>
      </button>
    </li>
  )
}
export default CategoryTab

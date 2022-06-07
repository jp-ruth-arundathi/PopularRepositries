// Write your code here
import './index.css'

const LanguageFilterItem = props => {
  const {languageFilterDetails, setActiveLanguageFilterId, isActive} = props
  const {id, language} = languageFilterDetails

  const btnClassName = isActive
    ? 'language-btn active-language-btn'
    : 'language-btn'

  const onClickLanguage = () => {
    setActiveLanguageFilterId(id)
  }

  return (
    <li className="list-item">
      <button type="button" className={btnClassName} onClick={onClickLanguage}>
        {language}
      </button>
    </li>
  )
}
export default LanguageFilterItem

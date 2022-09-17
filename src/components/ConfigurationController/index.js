import './index.css'
import ConfigurationContext from '../../context/ConfigurationContext'

const ConfigurationController = () => (
  <ConfigurationContext.Consumer>
    {value => {
      const {
        showContent,
        showLeftNavbar,
        showRightNavbar,
        onToggleShowContent,
        onToggleShowLeftNavbar,
        onToggleShowRightNavbar,
      } = value
      const onChangeContent = event => {
        onToggleShowContent(event.target.value)
      }
      const onChangeLeftMenu = event => {
        onToggleShowLeftNavbar(event.target.value)
      }
      const onChangeRightMenu = event => {
        onToggleShowRightNavbar(event.target.value)
      }

      return (
        <nav className="nav-bg-container">
          <h1 className="nav-heading">Layout</h1>
          <div className="checkbox-container">
            <input
              type="checkbox"
              id="content"
              className="checkbox"
              onChange={onChangeContent}
              value={showContent}
            />
            <label htmlFor="content" className="para">
              Content
            </label>
          </div>
          <div className="checkbox-container">
            <input
              type="checkbox"
              id="left"
              className="checkbox"
              onChange={onChangeLeftMenu}
              value={showLeftNavbar}
            />
            <label htmlFor="left" className="para">
              Left Navbar
            </label>
          </div>
          <div className="checkbox-container">
            <input
              type="checkbox"
              id="right"
              className="checkbox"
              onChange={onChangeRightMenu}
              value={showRightNavbar}
            />
            <label htmlFor="right" className="para">
              Right navbar
            </label>
          </div>
        </nav>
      )
    }}
  </ConfigurationContext.Consumer>
)

export default ConfigurationController

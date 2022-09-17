import './index.css'
import ConfigurationContext from '../../context/ConfigurationContext'

const Body = () => (
  <ConfigurationContext.Consumer>
    {value => {
      const {showContent, showLeftNavbar, showRightNavbar} = value

      const onRenderContentLayout = () => (
        <div className="content-container">
          <h1 className="content-heading">Content</h1>
          <p className="para-description">
            Lorem Ipsum dolor sit amet consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolor magna aliqua Ut enim
            and minim veniam.
          </p>
        </div>
      )

      const onRenderLeftMenu = () => (
        <div className="left-navbar-menu">
          <h1 className="left-navbar-heading">Left Navbar Menu</h1>
          <ul>
            <li className="list-items ">Item 1</li>
            <li className="list-items ">Item 2</li>
            <li className="list-items ">Item 3</li>
            <li className="list-items ">Item 4</li>
          </ul>
        </div>
      )

      const onRenderRightLayout = () => (
        <div className="right-navbar-container">
          <h1 className="left-navbar-heading">Right Navbar</h1>
          <div className="box1">
            <p>Ad 1</p>
          </div>
          <div className="box1">
            <p>Ad 2</p>
          </div>
        </div>
      )

      return (
        <div className="body-bg-container">
          {showLeftNavbar && onRenderLeftMenu()}
          {showContent && onRenderContentLayout()}
          {showRightNavbar && onRenderRightLayout()}
        </div>
      )
    }}
  </ConfigurationContext.Consumer>
)

export default Body

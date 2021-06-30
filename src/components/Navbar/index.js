import './index.css'

const Navbar = () => (
  <nav className="navbar-container">
    <h1 className="nav-link">Switch to hosting</h1>
    <img
      className="globe-image"
      src="https://as2.ftcdn.net/v2/jpg/01/34/15/11/1000_F_134151149_4qh7m3ir2TR4wZOCeysrpql2xHSQhc5b.jpg"
      alt="globe"
    />
    <div className="menu-container">
      <img
        className="menu-image"
        src="https://as1.ftcdn.net/v2/jpg/01/09/45/80/1000_F_109458015_QsWmchlzuwCZPqIUWR7HcTDsbbptejRv.jpg"
        alt="menu"
      />
      <img
        className="user-profile"
        alt="user"
        src="https://as2.ftcdn.net/v2/jpg/02/29/75/83/1000_F_229758328_7x8jwCwjtBMmC6rgFzLFhZoEpLobB6L8.jpg"
      />
    </div>
  </nav>
)

export default Navbar

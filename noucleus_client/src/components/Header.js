const Header = ({ user }) => {
  const publicHeader = (
    <header className="header">
      <h2>Noucleus</h2>
    </header>
  )

  return user != null ? (
    <header className="header">
      <h2>Noucleus</h2> <nobr></nobr>
      <h3>Welcome {user.username}!</h3>
    </header>
  ) : (
    publicHeader
  )
}

export default Header

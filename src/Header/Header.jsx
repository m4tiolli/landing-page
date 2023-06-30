import './Header.css'

function Header({ logo, color1, color2 }) {
    return (
        <header id="header" style={{ backgroundColor: color1 }}>
            <img src={logo} alt="" className="logo" />
            <div id="bHeader">
                <button className='bEntrar'>entrar</button>
                <button className='bCriar' style={{ color: color1 }}>criar conta</button>
            </div>
        </header>
    )
}

export default Header

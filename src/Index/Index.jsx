
import "./Index.css"
import { useNavigate } from "react-router-dom"

function Index() {
    const navigate = useNavigate();
    return (
        <div className="container">
            <p className="title">Landing Pages</p>
            <p className="subtitle">por Gabriel Matiolli</p>
            <div className="buttons">
                <button className="backup" onClick={() => navigate("/backup-em-nuvem")}>backup em nuvem</button>
                <button className="criacao" onClick={() => navigate("/criacao-de-aplicativos")}>criação de aplicativos</button>
            </div>
        </div>
    )
}

export default Index
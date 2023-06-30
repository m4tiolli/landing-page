import logo from '../assets/appcia.png'
import img1 from '../assets/ca1.png'
import img2 from '../assets/ca2.png'
import img3 from '../assets/ca3.png'
import img4 from '../assets/ca4.png'
import Landing from '../Landing/Landing'

const props = {
    logo: logo,
    img1: img1,
    img2: img2,
    img3: img3,
    img4: img4,
    cor1: "#0a3533",
    cor2: "#00d4cb",
    title1: "Transforme suas ideias em realidade!",
    title2: "Criatividade",
    title3: "Abrangência",
    sub1: "Você tem uma ideia incrível para um aplicativo, mas não sabe por onde começar? Nós estamos aqui para ajudar!",
    sub2: "Transformamos suas visões em realidade digital. Com uma equipe talentosa de designers e desenvolvedores especializados, trazemos sua ideia para a vida, criando aplicativos elegantes, intuitivos e poderosos.",
    sub3: "Não importa se você está começando do zero ou se já possui um esboço inicial, nós oferecemos soluções personalizadas para cada estágio do desenvolvimento do aplicativo. Nossa expertise abrange uma variedade de plataformas, incluindo iOS, Android e web, garantindo que seu aplicativo esteja disponível para uma ampla base de usuários.",
    sub4: "Não perca mais tempo! Venha nos conhecer e descubra como nossa empresa de criação de aplicativos pode transformar sua ideia em um aplicativo de sucesso. Juntos, podemos fazer a diferença no mundo digital.Entre em contato conosco hoje mesmo e vamos começar a trabalhar na sua próxima grande ideia!",
    btn1: "descubra como!",
    btn2: "entre em contato"
}

function Criacao() {

    return (
        <div id='containercriacao'>
            <Landing prop={props} />
        </div>

    )
}

export default Criacao;
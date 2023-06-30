import logo from '../assets/cloud9.png'
import img1 from '../assets/ba1.png'
import img2 from '../assets/ba2.png'
import img3 from '../assets/ba3.png'
import img4 from '../assets/ba4.png'
import Landing from '../Landing/Landing'


const props = {
    logo: logo,
    img1: img1,
    img2: img2,
    img3: img3,
    img4: img4,
    cor1: "#4ECCA3",
    cor2: "#00d4cb",
    title1: "Proteja seus dados com segurança na nuvem!",
    title2: "Priorizamos seus dados",
    title3: "+ Segurança",
    sub1: "Não corra o risco de perder informações valiosas. Com a nossa empresa de backup em nuvem, você pode garantir a proteção dos seus dados, de forma simples e eficiente.",
    sub2: "A segurança dos seus arquivos é a nossa prioridade. Nossa plataforma de backup em nuvem oferece uma solução robusta e confiável para proteger tudo o que é importante para você ou para o seu negócio. Armazene seus documentos, fotos, vídeos e muito mais, sem preocupações.",
    sub3: "Nossa tecnologia de ponta garante que seus dados estejam sempre seguros, com backups automáticos e criptografia avançada. Você pode se concentrar no que é realmente importante, enquanto cuidamos da proteção dos seus arquivos.",
    sub4: "Proteja seus dados com confiança e facilidade. Conte com nossa empresa de backup em nuvem para manter suas informações seguras e acessíveis. Agende uma demonstração hoje mesmo e descubra como podemos ajudar você a proteger o que realmente importa!",
    btn1: "eu quero!",
    btn2: "entre em contato"
}

function Backup() {
    return (
        <div id='containerBackup'>
            <Landing prop={props} />
        </div>

    )
}

export default Backup;
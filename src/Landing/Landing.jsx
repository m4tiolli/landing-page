/* eslint-disable react/prop-types */
import Header from '../Header/Header'
import './Landing.css'
import { BsChevronCompactDown } from 'react-icons/bs'
import { useRef, useEffect } from 'react'
import AOS from 'aos'
import 'aos/dist/aos.css';

function Landing({ prop }) {

    useEffect(() => {
        AOS.init({
            duration: 700,
        });
    }, []);
    const section1 = useRef(null)
    const section2 = useRef(null)
    const section3 = useRef(null)
    const handleScroll1 = () => {
        section1.current.scrollIntoView({ behavior: "smooth" });
    };
    const handleScroll2 = () => {
        section2.current.scrollIntoView({ behavior: "smooth" });
    };
    const handleScroll3 = () => {
        section3.current.scrollIntoView({ behavior: "smooth" });
    };
    return (
        <div id='containercriacao'>
            <Header logo={prop.logo} color1={prop.cor1} color2={prop.cor2} />
            <div id='section1' style={{ background: `linear-gradient(${prop.cor1}, ${prop.cor2})` }} >
                <div className='contentsection1' data-aos='fade-up'>
                    <h1 className='titlesection1'>{prop.title1}</h1>
                    <h4 className='subtitlesection1'>{prop.sub1}</h4>
                    <button className='buttonsection1' style={{ backgroundColor: prop.cor1 }}>{prop.btn1}</button>
                </div>
                <img alt="" src={prop.img1} className='imgsection1' data-aos='fade-up' />
                <BsChevronCompactDown className='icon' size={"5vw"} onClick={handleScroll1} />
            </div>
            <div id='section2' ref={section1} style={{ color: prop.cor1 }}>
                <img alt="" src={prop.img2} className="imgsection1" data-aos="fade-right" />
                <div className="contentsection1" data-aos="fade-left">
                    <h1 className='titlesection1'>{prop.title2}</h1>
                    <h4 className="subtitlesection1">{prop.sub2}</h4>
                </div>
                <BsChevronCompactDown className='icon' color={'#0a3533'} size={"5vw"} onClick={handleScroll2} />
            </div>
            <div id='section3' ref={section2} style={{ backgroundColor: prop.cor1 }}>
                <div className="contentsection1" data-aos="fade-right">
                    <h1 className='titlesection1'>{prop.title3}</h1>
                    <h4 className="subtitlesection1">{prop.sub3}</h4>
                </div>
                <img alt="" src={prop.img3} className="imgsection1" data-aos="fade-left" />
                <BsChevronCompactDown className='icon' color={'#FFF'} size={"5vw"} onClick={handleScroll3} />
            </div>
            <div id='section4' ref={section3} style={{ color: prop.cor1 }}>
                <img alt="" src={prop.img4} className="imgsection1" style={{ width: '15%' }} data-aos="fade-up" />
                <div className="contentsection1" data-aos="fade-up">
                    <h4 className="subtitlesection1">{prop.sub4}</h4>
                    <button className='buttonsection1' style={{ backgroundColor: prop.cor1 }}>{prop.btn2}</button>
                </div>
            </div>
        </div>
    )
}

export default Landing;
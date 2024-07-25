import Header from "./Header";
import Filme1 from '../img/filme1.jpg';
import Accordion from 'react-bootstrap/Accordion';

const ExibeTitulo = () => {
    return(
        <>
            <Header/>
            <div className="exibe-titulo-body">
                <img src={Filme1} alt="Abigail" />
                <div className="exibe-titulo-desc">
                    <h2>Abigail</h2>
                    <Accordion defaultActiveKey="0">
                        <Accordion.Item eventKey="0">
                            <Accordion.Header>Sinopse</Accordion.Header>
                            <Accordion.Body>
                                teste de Sinopse
                            </Accordion.Body>
                        </Accordion.Item>
                        <Accordion.Item eventKey="1">
                            <Accordion.Header>Trailer</Accordion.Header>
                            <Accordion.Body>
                                <iframe className="exibe-titulo-video" src="https://www.youtube.com/embed/4EEDJFCKryE" title="Abigail | Trailer 1 Oficial-  Dublado" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
                            </Accordion.Body>
                            </Accordion.Item>
                    </Accordion>
                </div>
            </div>
        </>
    )
}

export default ExibeTitulo;
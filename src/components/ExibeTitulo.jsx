import Header from "./Header";
import Accordion from 'react-bootstrap/Accordion';

const ExibeTitulo = ({catalago}) => {
    return(
        <>
            <Header/>
            <div className="exibe-titulo-body">
                <img src={catalago.imagem} alt={catalago.nome} />
                <div className="exibe-titulo-desc">
                    <h2>{catalago.nome}</h2>
                    <Accordion defaultActiveKey="0">
                        <Accordion.Item eventKey="0">
                            <Accordion.Header>Sinopse</Accordion.Header>
                            <Accordion.Body>
                                {catalago.nome}
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
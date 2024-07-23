import ItemFilme from "./ItemFilme";
import Carousel from 'react-bootstrap/Carousel';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';


const CatalagoItens = ({titulo, catalagos}) => {

    const grupoFilmes = [];
    for (let i = 0; i < catalagos.length; i += 4) {
        grupoFilmes.push(catalagos.slice(i, i + 4));
    }

    return (
        <>
            <h1 className='sub-title'>{titulo}</h1>
            <Carousel>
                {
                    grupoFilmes.map((group) => (
                        <Carousel.Item>
                            <Row>
                                {
                                    group.map((item) => (
                                        <Col xs={6} sm={6} lg={3}>
                                            <ItemFilme titulo={item.nome} imagem={item.imagem}/>
                                        </Col>
                                    ))
                                }
                            </Row>
                        </Carousel.Item>
                    ))
                }
            </Carousel>
        </>
    )
}

export default CatalagoItens;
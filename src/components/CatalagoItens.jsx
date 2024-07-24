import ItemFilme from "./ItemFilme";
import Carousel from 'react-bootstrap/Carousel';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { useState, useEffect } from "react";

const CatalagoItens = ({titulo, catalagos, tituloMt}) => {
    const [tamanho, setTamanho] = useState(4);

    useEffect(() => {
        const handleResize = () => {
            if(window.innerWidth <= 600){
                setTamanho(2)
            }else {
                setTamanho(4)
            }
        };

        handleResize();
        window.addEventListener('resize', handleResize);
    })
    

    const grupoFilmes = [];
    for (let i = 0; i < catalagos.length; i += tamanho) {
        grupoFilmes.push(catalagos.slice(i, i + tamanho));
    }

    return (
        <>
            {
                tituloMt 
                ? <h1 className='sub-title sub-title-mt'>{titulo}</h1>
                : <h1 className='sub-title'>{titulo}</h1>
            }
            <Carousel controls={false} interval={4000} touch={true}>
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
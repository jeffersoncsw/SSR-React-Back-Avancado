import axios from 'axios'
import React, {useState, useEffect} from 'react'

function HomePage(props) {
    //Api renderizando do lado do cliente
    const [piada, setPiada] = useState('')

    useEffect(() => {
        getPiada();
    }, []);

    const getPiada = async () => {
        const resposta = await axios.get('https://api.chucknorris.io/jokes/random')
        setPiada(resposta.data.value)
    }

    return (
    <div>
        <h3>Piadas do Chuck Norris </h3>
        <p><strong>API ClientSideRendering: </strong>{piada}</p>
        <p><strong>API ServerSideRendering: </strong>{props.value}</p>
    </div>
    )
}

//Api renderizando no lado do servidor
export const getStaticProps = async () => {
    const resposta = await axios.get('https://api.chucknorris.io/jokes/random')
    return{
        props: {
            value: resposta.data.value
        }
    }
}
  
export default HomePage;
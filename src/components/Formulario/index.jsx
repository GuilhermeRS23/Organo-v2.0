import { useEffect, useState } from 'react';
import Botao from '../Botao';
import CampoText from '../CampoText';
import ListaSuspensa from '../ListaSuspensa';
import "./Formulario.css"

const Formulario = (props) => {

    const posicaoNaEquipe = [
        'Piloto N° 1',
        'Piloto N° 2',
        'Piloto Reserva',
        'Chefe de Equipe'
    ]

    const [nome, setNome] = useState("");
    const [posicao, setPosicao] = useState("");
    const [foto, setFoto] = useState("");
    const [equipe, setEquipe] = useState("");

    

    const aoSalvar = (event) => {
        event.preventDefault()
        props.aoMembroCadastrado({nome,posicao,foto,equipe})
        
        setNome('')
        setPosicao('')
        setFoto('')
        setEquipe('')
    }

    return (
        <section className="formulario">
            <form onSubmit={aoSalvar}>
                <h2>Preencha os dados para criar o card do membros:</h2>
                <CampoText
                    obrigatorio={true}
                    label='Nome' tipo='text'
                    placeholder="Digite o nome do membro da equipe..."
                    valor={nome}
                    aoAlterado={setNome}
                />

                <ListaSuspensa
                    obrigatorio={true}
                    label='Posição na Equipe'
                    itens={posicaoNaEquipe}
                    valor={posicao}
                    aoAlterado={valor => setPosicao(valor)}
                />

                <CampoText
                    tipo='link' label='Foto'
                    placeholder="Informe o endereço da imagem..."
                    valor={foto}
                    aoAlterado={setFoto}
                />

                <ListaSuspensa
                    obrigatorio={true} label='Equipe'
                    itens={props.nomeDasEquipes}
                    valor={equipe}
                    aoAlterado={valor => setEquipe(valor)}
                />

                <Botao>Criar Card</Botao>
            </form>
        </section>
    )
}

export default Formulario;
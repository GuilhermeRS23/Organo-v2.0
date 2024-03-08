import "./Botao.css"
//USANDO PROPS NOMALMENTE
const Botao = (props) => {
    return (
        <button className="botao">{props.children} </button>
    )
} 

export default Botao;

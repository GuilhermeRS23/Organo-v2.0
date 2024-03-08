import Membro from "../Membro";
import "./Equipe.css";

const Equipe = (props) => {
  const cssBackground = {backgroundColor: props.corFundo, borderColor:props.corPrimaria};
  return(
    //CONDIÇÃO EM JSX  
    //condição ? valor1 : valor2 
    //condição && valor1 
    (props.membros.length > 0) &&
    <section className="equipe" style={cssBackground}>
        <h3 style={{borderColor: props.corPrimaria}}>{props.nome}</h3>

        <div className="membros">
        {props.membros.map(membro => 
        <Membro  nome={membro.nome}
        corDeFundo={props.corPrimaria}
        key={membro.nome}
        posicao={membro.posicao}
        foto={membro.foto}
        />)}
        </div>
        
    </section>
  )
};

export default Equipe;

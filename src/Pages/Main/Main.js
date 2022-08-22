import './style-main.css';
import Touch from '../../assets/touch.png';


function Main() {
  return (
    <div id="main">
      <div className="Main">
          <div className="Background">
            <div className="Center">
              <div ClassName="left-side">
              <h1 className="empresa">Natal Eletrônica & Segurança - Natal Antenas</h1>
              <h1 className="seguranca">A segurança na sua Casa</h1>
               <h3 className="celular">Central (84) 3208-2121</h3>
               <div className="center">
               <h4 className="text">Atendemos:<br></br>Portão eletrônico<br></br> Câmeras de segurança<br></br>
               Cerca elétrica<br></br>Antenas de TV<br></br>
               Motor para portão<br></br>Interfone com/sem Camera<br></br>Alarmes<br></br> <br></br>
                Trabalhamos com os melhores 
               portões eletrônicos do mercado e oferecemos serviços e assistência para todos os modelos de motores.
               <br></br>Peça seu ORÇAMENTO!<br></br>Executamos projetos de Circuito Fechado de Monitoramento, cerca elétrica e 
               Interfones residenciais e prediais.<br></br><br></br>Tenha um Cinema na sua casa. <br></br>
               Trabalhamos com os melhores sistemas de programação de TV como SKY, TV a Cabo e GloboSat.<br></br></h4>
              <img className="touch" src={Touch} alt="touch" />
              </div>
              </div>
             </div>
          </div>
        </div>
    </div>
  );
}

export default Main;

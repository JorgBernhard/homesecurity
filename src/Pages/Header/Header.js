import './style-header.css';
import Logo from '../../assets/Logo.png';


export default function NavBar() {

    return (
        <div id="header">
            <div className="sidebar">
               <img className="Logo" src={Logo} alt="logo"></img>
                <div className="list">
                <a href='#main'>Home</a>
                <a href='#empresa' >Empresa</a>
                <a href='#projects' >Projects</a>
                <a href='#contact' >Contact</a>
               
                </div>
                <h3 className="info">Ligue para a gente:</h3>
               <h3 className="telefone">(84) 3208-2121</h3>
               <h3 className="handy">(84) 99656-6666</h3>
            </div>
        </div>
    );
}

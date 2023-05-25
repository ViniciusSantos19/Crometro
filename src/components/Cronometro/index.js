import { Component } from "react"
import CronometroIMG from ".../assets/cronometro.png"
import './index.css'

class Cronometro extends Component{
    constructor(props){
        super(props);
        this.state ={
            tempo:0.0,
            botao:"VAI"
        }
        this.funcaoTimer = null;
    }

    limpar(){
        clearInterval(this.funcaoTimer);
        this.setState({botao:"VAI",  tempo: 0 });
        this.funcaoTimer = null;
    }

    cronometrar(){
        let estado = this.state;

        if(this.funcaoTimer == null){
            estado.botao = 'Pausar';

            this.funcaoTimer = setInterval(() => {
                estado.tempo += 0.1;
                this.setState(estado);
                }, 1000);
               

        }else{
            estado.botao = 'Vai';
            clearInterval(this.funcaoTimer);
            this.funcaoTimer = null;
            this.setState(estado);
        }

        

    }

    render(){

        return(
            <div className="conteiner">
            <img src={CronometroIMG} className="img" />
            <a className="timer">o.o</a>
            <a className="timer">{this.state.tempo.toFixed(1)}</a>
            <div className="areaTexto">
            <button className="botao" onClick={this.vai.bind(this)}>{this.state.botao}</button>
            <button className="botao" onClick={this.limpar.bind(this)}>Limpar</button>
            </div>
           </div>
        )

    }

}export default Cronometro
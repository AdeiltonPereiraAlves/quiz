/* eslint-disable react/prop-types */
import { useState } from "react"
import Contador from "./Contador";



export default function Opcoes(props) {
    console.log(props)
    const [opcaoAtual, setOpcaoAtual] = useState('')
   let [acertos, setAcertos] = useState(0);
    const [verdadeiro, setVerdadeiro] = useState(false)

    function setOption(value) {
        setOpcaoAtual(value)
        console.log(`${opcaoAtual} atual e correta${ props.correta}`)
        if (value === props.correta) {
            
            setVerdadeiro(true)
            setAcertos(acertos=> acertos+1)
        } else {
            setVerdadeiro(false); // Caso a opção não seja correta, manter o estado falso
        }

    }

    

    return (
        <div>
            <Contador acertos={acertos}/>
            <div className={verdadeiro ? 'bg-green-300' : 'bg-red-400'}>{opcaoAtual}</div>
            {props.options.map((option, i) => (
                <div key={i}>
                    <button onClick={() => setOption(option)} value={option}>{option}</button>
                </div>
            ))}
        </div>
    )
}
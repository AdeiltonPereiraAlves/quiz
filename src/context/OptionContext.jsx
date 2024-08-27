import { createContext, useEffect } from "react";
import { useState } from "react";
import programmingQuizSeed from "../data/quizDb"
import Opcoes from "../components/Opcoes"
import Acertos from "../components/Acertos"
import useOpcoes from '../hooks/useOpcoes'
export const OptionContext = createContext()


export default function OptionProvider({children}){
  const [count, setCount] = useState(0)
  const [quiz, setQuiz] = useState(programmingQuizSeed)
    const [res, setRes] = useState()
    const [atual, setAtual] = useState()
    const [atualOption, setAtualOption] = useState()
    const [boleano, setBoleano] = useState(false)
   
    const [selectedOption, setSelectedOption] = useState(null);
    const [msgErrou, setMsgErrou] = useState('')
    const [msgAcertou, setMsgAcertou] = useState('')
    const[umClick, setUmClick] = useState(0);
    const [numAleatorio, setNumeroAleatorio] = useState();
     
    const[acertos, setAcertos] = useState(0)
  
  //  useEffect(()=>{
  //     aleatorizarArray();
  
  //  },[])

   function aleatorizarArray(){
    let n = Math.floor(Math.random() * 20)
    console.log(n)
    setCount(n)
   
    setAtual(quiz[count].question)
 }
    
   const stateDados = {
      boleano, setBoleano,
      acertos, setAcertos,
      selectedOption, setSelectedOption,
      msgAcertou, setMsgAcertou,
      msgErrou, setMsgErrou,setAtualOption,atualOption,
      quiz, res,atual, atualOption, count, setCount, setAtual,setRes, umClick, setUmClick, setQuiz, aleatorizarArray
   }
   
    return(
        <OptionContext.Provider value={stateDados}>
               {children}
        </OptionContext.Provider>
    )
}
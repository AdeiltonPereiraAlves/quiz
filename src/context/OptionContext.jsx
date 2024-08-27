import { createContext } from "react";
import { useState } from "react";
import programmingQuizSeed from "../data/quizDb"
import Opcoes from "../components/Opcoes"
import Acertos from "../components/Acertos"
import useOpcoes from '../hooks/useOpcoes'
export const OptionContext = createContext()


export default function OptionProvider({children}){
  const [quiz, setQuiz] = useState(programmingQuizSeed)
    const [res, setRes] = useState(programmingQuizSeed[0].correctAnswer)
    const [atual, setAtual] = useState(programmingQuizSeed[0].question)
    const [atualOption, setAtualOption] = useState(programmingQuizSeed[0].options)
    const [boleano, setBoleano] = useState(false)
    const [count, setCount] = useState(0)
    const [selectedOption, setSelectedOption] = useState(null);
    const [msgErrou, setMsgErrou] = useState('')
    const [msgAcertou, setMsgAcertou] = useState('')
    const[umClick, setUmClick] = useState(0);
     
    const[acertos, setAcertos] = useState(0)
   

    
   const stateDados = {
      boleano, setBoleano,
      acertos, setAcertos,
      selectedOption, setSelectedOption,
      msgAcertou, setMsgAcertou,
      msgErrou, setMsgErrou,setAtualOption,atualOption,
      quiz, res,atual, atualOption, count, setCount, setAtual,setRes, umClick, setUmClick,
   }
   
    return(
        <OptionContext.Provider value={stateDados}>
               {children}
        </OptionContext.Provider>
    )
}
import { useState } from "react"
import programmingQuizSeed from "../data/quizDb"
import Opcoes from "./Opcoes"
import Acertos from "./Acertos"

export default function Perguntas() {

    const [quiz, setQuiz] = useState(programmingQuizSeed)
    const [res, setRes] = useState(programmingQuizSeed[0].correctAnswer)
    const [atual, setAtual] = useState(programmingQuizSeed[0].question)
    const [atualOption, setAtualOption] = useState(programmingQuizSeed[0].options)
    const [boleano, setBoleano] = useState(null)
    const [count, setCount] = useState(0)
    const [selectedOption, setSelectedOption] = useState(null);
    const [msgErrou, setMsgErrou] = useState('')
    const [msgAcertou, setMsgAcertou] = useState('')
    const[acertos, setAcertos] = useState(0)
    function handleProxima() {
       if(count<quiz.length-1 ){

           setAtual(quiz[count+1].question)
           setAtualOption(quiz[count+1].options)
           setRes(quiz[count+1].correctAnswer)
           console.log(res)
           setCount(count + 1);
           setBoleano(null)
           setSelectedOption(null);
           setMsgErrou("")
           setMsgAcertou("")
       }else{
        alert("quiz finalizado")
        window.location.reload()
        
       }

    }
    function handleOption(value) {
       
        console.log(value)
        setRes(quiz[count].correctAnswer)
        if (value === res) {
           
            setBoleano(true)
            setAcertos(acertos+1)
            setSelectedOption(true);
            setMsgAcertou("Correto")
            
        } else {
            setBoleano(false)
            setMsgErrou("Você Errou!!!")
          
        }
    }
    return (
        <div className="flex flex-col gap-4 ">
            {/* {quiz.map((item,i)=>(
               <div key={i} >
                 <p>{item.question}</p>
                 <Opcoes options={item.options} correta={item.correctAnswer} />
               </div>
            ))} */}
            {/* <div>{acertos}</div> */}
            <Acertos acertos={acertos}/>
            <div>
                {msgErrou}
            </div>
            <dir>{msgAcertou}</dir>
            <div className="flex w-90 h-20 justify-center mx-4 "><div className=" w-25 h-40 flex text-xl sm:text-base md:text-lg lg:text-xl xl:text-2xl break-words ">{atual}</div></div>
            {/* <div className="flex gap-10 "><button onClick={()=>handleOption(atualOption.shift())} value={atualOption} className={`${boleano? 'bg-green-600' : 'bg-red-500'} gap-10 `} ><div className="flex m-10">{atualOption}</div></button></div>
            <div></div>
            <div></div>
            <div></div> */}
            <div className="flex flex-wrap gap-6 justify-center w-[800px] mx-4">
                {quiz[count].options.map((option,i) => (
                    <div className="flex gap-10 " key={i}>
                
                        <button onClick={() => handleOption(option)} value={option} className={`${ option === res && selectedOption== true? 'bg-green-600' : 'bg-[#a6aec1]'} ${option !== res ? 'bg-[#a6aec1]' : ''} p-4 rounded text-black `} >{
                         option }
                        {/* <button onClick={() => handleOption(option)} value={option} className={` gap-10 `} >{
                         option} */}
                    </button>
                    </div>
                ))}
            </div>
            <button onClick={handleProxima}>proxima</button>
        </div>
    )
}
/* eslint-disable no-unused-vars */
import { useContext, useState } from "react"
import programmingQuizSeed from "../data/quizDb"
import Opcoes from "./Opcoes"
import Acertos from "./Acertos"
import useOpcoes from '../hooks/useOpcoes'
import { OptionContext } from "../context/OptionContext"

export default function Perguntas(){
    const {handleOption, handleProxima} = useOpcoes() 
 
    
    


    const {acertos,msgAcertou, msgErrou, res,selectedOption, quiz, boleano, atual,atualOption,count, option} = useContext(OptionContext)

    function click(){
        handleProxima()
    }

    return (
        <div className="flex flex-col gap-2 h-full items-center px-4 relative">
             <h1 className="text-xl font-extrabold">Quiz</h1>
          
            {/* <div>{acertos}</div> */}
            <Acertos acertos={acertos}/>
            <div className="flex max-w-[250px] absolute top-16 right-38 ">
                <span className="text-red-600">{msgErrou}</span>
            <span className="text-green-400">{msgAcertou}</span>
            </div>
            <div className="flex w-90 h-20 justify-center min-w-[200px] max-w-[250px] mt-8"><div className=" w-25 h-40 flex text-xl sm:text-base md:text-lg lg:text-xl xl:text-2xl break-words ">{atual}</div></div>
          
            <div className="flex flex-col gap-2 justify-center  md:w-[700] mx-auto h-[300px] relative">
                {quiz[count].options.map((option,i) => (
                    <div className="flex  text-sm min-w-[300px] " key={i}>
                
                        <button  onClick={() => handleOption(option)} value={option} className={`${ option === res && selectedOption== true? 'bg-green-600' : 'bg-[#a6aec1]'} ${option !== res ? 'bg-[#a6aec1]' : ''} p-4 rounded text-black  min-w-[300px] max-w-[300px] hover:bg-[#6c788e]`} >{
                         option }
                        
                    </button>
                    </div>
                ))}
            </div>
            <div className=" absolute flex items-end h-90 w-60 top-[500px] justify-center text-gray-400 font-bold hover:text-slate-800">
                <button onClick={click}>proxima </button>
            </div>
        </div>
    )
}
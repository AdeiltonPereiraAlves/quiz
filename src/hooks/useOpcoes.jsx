import { useContext } from "react";
import { OptionContext } from "../context/OptionContext";

export default function useOption(){

    const {setBoleano, aleatorizarArray,quiz,setAtual,setQuiz, umClick,setUmClick,acertos, atual,setRes,res, setAcertos, setAtualOption, atualOption,setSelectedOption, setMsgAcertou,count,setCount, setMsgErrou} = useContext(OptionContext)
    
   
    function handleOption(value){
        setRes(quiz[count].correctAnswer)
        if (value === res && umClick === 0) {
            
            setBoleano(true);
            setAcertos(acertos+1);
            setSelectedOption(true);
            setMsgAcertou("Correto");
            setUmClick(1)
            
        } else if(umClick===0){
            setUmClick(1)
            setBoleano(false);
            setMsgErrou("Você Errou!!!");
          
        }
        
    }
    function filtrarRepetidas(array,id){
        return array.filter((e) => e.id != id)
    }
    function handleProxima() {
     
        if(count<20){
            setUmClick(0)
            setAtual(quiz[count].question)
            setAtualOption(quiz[count].options)
            setRes(quiz[count].correctAnswer)
            console.log(res)
            aleatorizarArray()

            // setCount(count + 1);
            setBoleano(null);
            setSelectedOption(null);
            setMsgErrou("")
            setMsgAcertou("")
        }else{
         alert("quiz finalizado")
         window.location.reload()
         
        }
 
     }

   

    return{
        handleOption,
        handleProxima
    }
}
import { useContext } from "react";
import { OptionContext } from "../context/OptionContext";

export default function useOption(){

    const {setBoleano,quiz,setAtual,acertos, atual,setRes,res, setAcertos, setAtualOption, atualOption,setSelectedOption, setMsgAcertou,count,setCount, setMsgErrou} = useContext(OptionContext)
    function handleOption(value){
        setRes(quiz[count].correctAnswer)
        if (value === res) {
           
            setBoleano(true);
            setAcertos(acertos+1);
            setSelectedOption(true);
            setMsgAcertou("Correto");
            
        } else {
            setBoleano(false);
            setMsgErrou("Você Errou!!!");
          
        }
    }
    function handleProxima() {
        if(count<quiz.length-1){
            
            setAtual(quiz[count+1].question)
            setAtualOption(quiz[count+1].options)
            setRes(quiz[count+1].correctAnswer)
            console.log(res)
            setCount(count + 1);
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
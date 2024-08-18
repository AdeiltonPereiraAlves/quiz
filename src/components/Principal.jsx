import Perguntas from "./Perguntas";

export default function Principal(){
    return(
        <div className=" flex flex-col md:flex-row h-96 bg-[#ededf2] p-4  rounded-md relative">
           <h1>Quiz</h1>
          <Perguntas/>
        </div>
    )
}
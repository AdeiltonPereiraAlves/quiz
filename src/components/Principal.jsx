import Perguntas from "./Perguntas";

export default function Principal(){
    return(
        <div className=" flex flex-col flex-wrap h-4/5 bg-[#ededf2] p-6 min-w-[300px]  rounded-md shadow-md">
          
          <Perguntas/>
        </div>
    )
}
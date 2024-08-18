import Perguntas from "./Perguntas";

export default function Principal(){
    return(
        <div className=" flex flex-col flex-wrap h-[600px] bg-[#ededf2] p-6 sm:min-w-[300px] md:min-w-[400px] rounded-md shadow-md">
          
          <Perguntas/>
        </div>
    )
}
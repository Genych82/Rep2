import { getRoles } from "@testing-library/react"

function Shakes(){
    return(
        <div>
        Шекспир родился...
        </div>
    )
}
export{Shakes}

function NewComponent({name,children}){
    return(
        <div> 
            Hello,{name}
        </div>
    )
    {children}
}
export{NewComponent}
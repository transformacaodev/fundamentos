import ContadorContexto from "@/data/contexts/ContadorContexto"
import { useContext } from "react"

export default function Exibir() {

    const ctx = useContext(ContadorContexto)

    return (
        <div>
            <span className="text-5xl font-black">{ctx.numero}</span>
        </div>
    )
}
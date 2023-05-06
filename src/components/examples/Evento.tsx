import { IconMinus, IconPlus } from "@tabler/icons-react"
import { useState } from "react"

export default function Evento() {
    const [valor, setValor] = useState(0)

    function incrementar() {
        setValor(valor + 1)
    }

    function decrementar() {
        setValor(valor - 1)
    }

    return (
        <div className={`flex flex-col gap-4`}>
            <span className="text-3xl"><b>Valor: </b> {valor}</span>
            <div className="flex gap-5">
                <button onClick={incrementar}>
                    <IconPlus />
                </button>
                <button onClick={decrementar}>
                    <IconMinus />
                </button>
            </div>
        </div>
    )
}
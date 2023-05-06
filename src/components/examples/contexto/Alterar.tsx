import ContadorContexto from '@/data/contexts/ContadorContexto'
import { useContext } from 'react'

export default function Alterar() {
    const { inc, dec } = useContext(ContadorContexto)

    return (
        <div className="flex gap-5">
            <button onClick={dec} className="botao text-2xl font-bold">-1</button>
            <button onClick={inc} className="botao text-2xl font-bold">+1</button>
        </div>
    )
}

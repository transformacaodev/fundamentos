import { createContext, useState } from 'react'

interface ContadorContextoProps {
    numero: number
    inc: () => void
    dec: () => void
}

const ContadorContexto = createContext<ContadorContextoProps>({
    numero: 0,
    inc: () => {},
    dec: () => {},
})

export function ContadorProvedor(props: any) {
    const [numero, setNumero] = useState<number>(10)

    const inc = () => setNumero(numero + 1)
    const dec = () => setNumero(numero - 1)

    return (
        <ContadorContexto.Provider
            value={{
                numero,
                inc,
                dec,
            }}
        >
            {props.children}
        </ContadorContexto.Provider>
    )
}

export default ContadorContexto

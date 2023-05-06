export interface BotoesProps {
    mudarValor: (novo: string) => void
}

export default function Botoes(props: BotoesProps) {
    return (
        <div className="flex gap-5">
            <button className="botao" onClick={() => props.mudarValor('Pedro')}>
                Pedro
            </button>
            <button className="botao" onClick={() => props.mudarValor('João')}>
                João
            </button>
            <button className="botao" onClick={() => props.mudarValor('Ana')}>
                Ana
            </button>
            <button className="botao" onClick={() => props.mudarValor('Paula')}>
                Paula
            </button>
        </div>
    )
}

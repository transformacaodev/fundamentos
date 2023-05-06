export interface FilhoProps {
    nome: string
    sobrenome: string
}

export default function Filho(props: FilhoProps) {
    return (
        <li>
            {props.nome} {props.sobrenome}
        </li>
    )
}

export default function Caixa(props: any) {
    return (
        <div className={`
            flex p-4
            bg-red-400 rounded-xl
        `}>
            {props.children}
        </div>
    )
}
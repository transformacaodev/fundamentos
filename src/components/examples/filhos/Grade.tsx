export default function Grade(props: any) {
    return (
        <div className={`
            grid grid-cols-3 gap-4 p-7
        `}>
            {props.children}
        </div>
    )
}
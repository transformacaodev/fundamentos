import Pagina from '@/components/template/Pagina'

export async function getStaticProps() {
    const url = 'http://localhost:3000/api/promocoes'
    const resp = await fetch(url)
    const promocoes = await resp.json()

    const data = new Date().toLocaleTimeString('pt-BR')
    return {
        props: { abc: 123, data, promocoes },
        revalidate: 30, // 30 segundos
    }
}

export default function PaginaDireta(props: any) {
    return (
        <Pagina>
            <div>
                <span>{props.data}</span>
                <ul>
                    {props.promocoes?.map((prod: any) => {
                        return (
                            <li key={prod.id}>
                                {prod.nome} - {prod.preco}
                            </li>
                        )
                    })}
                </ul>
            </div>
        </Pagina>
    )
}

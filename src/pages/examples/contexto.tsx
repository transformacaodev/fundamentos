import Alterar from '@/components/examples/contexto/Alterar'
import Exibir from '@/components/examples/contexto/Exibir'
import Pagina from '@/components/template/Pagina'

export default function PaginaEvento() {
    return (
        <Pagina>
            <div className='flex flex-col items-center gap-5'>
                <Exibir />
                <Alterar />
            </div>
        </Pagina>
    )
}

import Caixa from "@/components/examples/filhos/Caixa";
import Grade from "@/components/examples/filhos/Grade";
import Pagina from "@/components/template/Pagina";

export default function PaginaFilhos() {
    return (
        <Pagina>
            <Grade>
                <Caixa>#1</Caixa>
                <Caixa>#2</Caixa>
                <Caixa>#3</Caixa>
                <Caixa>#4</Caixa>
                <Caixa>#5</Caixa>
                <Caixa>#6</Caixa>
                <Caixa>#7</Caixa>
                <Caixa>#8</Caixa>
                <Caixa>
                    <span>#</span>
                    <span><b>9</b></span>
                </Caixa>
            </Grade>
        </Pagina>
    )
}
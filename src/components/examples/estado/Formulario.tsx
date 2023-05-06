import { useState } from 'react'

interface Produto {
    nome: string
    preco: number
    desconto: number
}

export default function Formulario() {
    const [produto, alterarProduto] = useState<Produto>({
        nome: '',
        preco: 0,
        desconto: 0
    })

    return (
        <div className='flex flex-col gap-5 items-center'>
            <span className="text-2xl font-black">Exemplo Formulário</span>
            <div>
                <span>Nome:</span>
                <input 
                    type="text"
                    value={produto.nome}
                    className='entrada'
                    onChange={e => {
                        alterarProduto({
                            ...produto,
                            nome: e.target.value
                        })
                    }}
                />
            </div>
            <div>
                <span>Preço:</span>
                <input 
                    type="number"
                    value={produto.preco}
                    className='entrada'
                    min={0}
                    step={0.1}
                    onChange={e => {
                        alterarProduto({
                            ...produto,
                            preco: +e.target.value
                        })
                    }}
                />
            </div>
            <div>
                <span>Preço:</span>
                <input 
                    type="number"
                    value={produto.desconto}
                    className='entrada'
                    min={0}
                    max={0.6}
                    step={0.01}
                    onChange={e => {
                        alterarProduto({
                            ...produto,
                            desconto: +e.target.value
                        })
                    }}
                />
            </div>

            <div className='flex flex-col gap-2 text-2xl'>
                <span>{JSON.stringify(produto)}</span>
                <span>{produto.nome}</span>
                <span>R$ {produto.preco}</span>
                <span>R$ {produto.desconto}</span>
                <span>R$ {produto.preco * (1 - produto.desconto)}</span>
            </div>
        </div>
    )
}

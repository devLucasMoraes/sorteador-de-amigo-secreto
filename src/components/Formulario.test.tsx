import { fireEvent, render, screen } from "@testing-library/react"
import React from "react"
import { RecoilRoot } from "recoil"
import Formulario from "./Formulario"

test('quando o input está vazio, novos participantes não podem ser adicionados', () => {
    render(<Formulario />)

    // encontrar no DOM o input
    const input = screen.getByPlaceholderText('Insira os nomes dos participantes')

    // encontrar o botao
    const botao = screen.getByRole('button')

    // garantir que o input esteja no documento
    expect(input).toBeInTheDocument()

    // garantir que o botao esteja desabilitado
    expect(botao).toBeDisabled()

})

test('adicionar um participante caso exista um nome preenchido', () => {
    render(<RecoilRoot><Formulario /></RecoilRoot>)

    // encontrar no DOM o input
    const input = screen.getByPlaceholderText('Insira os nomes dos participantes')

    // encontrar o botao
    const botao = screen.getByRole('button')

    // inserir um valor no input
    fireEvent.change(input, {
        target: {
            value: 'Ana Catarina'
        }
    })

    // clicar no botao de submeter
    fireEvent.click(botao)

    // garantir que o input esteja com o foco ativo
    expect(input).toHaveFocus()

    // garantir que o input nao tenha valor
    expect(input).toHaveValue('')
})
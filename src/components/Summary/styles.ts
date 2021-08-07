import styled from "styled-components";

export const Container = styled.div`
    display: grid; //pq sao 3 itens
    grid-template-columns: repeat(3, 1fr); //quero 3 colunas de frames(tamanho iguais);
    gap: 2rem; //espaçamento entre os grids
    margin-top: -10rem;

    div{//estilizaçao da div dentro do container
        background: var(--shape);
        padding: 1.5rem 2rem;
        border-radius: 0.25rem;
        color: var(--text-title);

        header{
            display: flex;
            align-items: center;
            justify-content: space-between;
        }

        strong{
            display: block;
            margin-top: 1rem;
            font-size: 2rem;
            font-weight: 500;
            line-height: 3rem;
        }
        &.highlight-background{
            background: var(--green);
            color: #fff
        }
    }
`
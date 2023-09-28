import { useEffect } from "react";
import { Header } from "../../components/Header";
import { Summary } from "../../components/Summary";
import { SearchForm } from "./components/SearchForm";
import { PriceHighlight, TransactionsContainer, TransactionsTable } from "./styles";

export function Transactions() {
  useEffect(() => {
    fetch('http://localhost:3333/transactions')
      .then(response => response.json())
      .then(data => {
        console.log(data)
      })
  }, [])

  return (
    <div>
      <Header />
      <Summary />

      <TransactionsContainer>

        <SearchForm />
        <TransactionsTable>
          <tbody>
            <tr>
              <td width="50%">Desenvolvimento de Site</td>
              <td>
                <PriceHighlight variant="income">
                  R$ 12.000,00
                </PriceHighlight>
              </td>
              <td>Venda</td>
              <td>13/04/2023</td>
            </tr>
            <tr>
              <td width="50%">Hamburguer</td>
              <td>
                <PriceHighlight variant="outcome">
                  - R$ 5.000,00
                </PriceHighlight>
              </td>
              <td>Alimentação</td>
              <td>10/04/2023</td>
            </tr>
          </tbody>
        </TransactionsTable>
      </TransactionsContainer>
    </div>
  )
}
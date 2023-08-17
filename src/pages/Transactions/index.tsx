import { Header } from "../../components/Header";
import { Summary } from "../../components/Summary";
import { TransactionsContainer, TransactionsTable } from "./styles";

export function Transactions() {
  return (
    <div>
      <Header />
      <Summary />

      <TransactionsContainer>
        <TransactionsTable>
          <tbody>
            <tr>
              <td width="50%">Desenvolvimento de Site</td>
              <td>R$ 12.000,00</td>
              <td>Venda</td>
              <td>13/04/2023</td>
            </tr>
            <tr>
              <td width="50%">Hamburguer</td>
              <td>- R$ 5.000,00</td>
              <td>Alimentação</td>
              <td>10/04/2023</td>
            </tr>
          </tbody>
        </TransactionsTable>
      </TransactionsContainer>
    </div>
  )
}
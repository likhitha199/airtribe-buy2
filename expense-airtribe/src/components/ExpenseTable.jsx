const ExpenseTable = (props) => {
    const {expenses} = props;
    return ( 
        <table>
            <thead>
                <tr>
                    <th>Amount</th>
                    <th>Transaction Type</th>
                </tr>
            </thead>
            <tbody>
                {
                    expenses.map((expense, index) => {
                        return (
                            <tr key={index}>
                                <td>{expense.amount}</td>
                                <td style={{color: expense.type === "credit" ? 'green' : 'red'}}>{expense.type}</td>
                            </tr>
                        )
                    })
                }
            </tbody>
        </table>
     );
}
 
export default ExpenseTable;
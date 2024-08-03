import { useState } from "react";
const AddExpense = (props) => {
    const {setExpenses, setTotalExpenses} = props;
    const [amount, setAmount] = useState(null);

    const setCredit = () => {
        setExpenses(prevState => [...prevState, {amount: amount, type: "credit"}]);
        setAmount("");
    }
    const setDebit = () => {
        setExpenses((prevExpenses) => [...prevExpenses, {amount: amount, type: "debit"}]);
        setTotalExpenses((prevTotalExpenses) => prevTotalExpenses + amount);
        setAmount("");
    }
    return ( 
        <div>
            <input value={amount} onChange={(e) => {
                const amount = parseInt(e.target.value);
                setAmount(amount);
            }} 
            type="number" name="" id="" />
            <button onClick={setCredit}>Credit</button>
            <button onClick={setDebit}>Debit</button>
        </div> 
    );
}
 
export default AddExpense;
const SetDailyBudget = (props) => {
    const {dailyBudget, changeDailyBudgetValue} = props;

    const setBudget = (e) => {
        e.preventDefault();
        console.log(e);
        changeDailyBudgetValue(e.target[0].value);
        e.target[0].value = null;
        
    }
    const clearBudget = () => {
        changeDailyBudgetValue(null);
        
    }
    return ( 
        <form onSubmit={setBudget}>
            <input type="number" name="" id="" />
            {!dailyBudget ? <button type="submit">Set Daily Budget</button> : null}
            {dailyBudget > 0 ? <button onClick={clearBudget}>Reset Daily Budget</button> : null}
        </form>
     );
}
 
export default SetDailyBudget;
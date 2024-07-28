import PropTypes from 'prop-types';
let timerId = null;
function TimerActions(props) {
    function startTimer() {
        timerId = setInterval(() => {
            props.setTimer(prev => prev + 1);
        },1000)
    }

    function stopTimer() {
        clearInterval(timerId);
    }
    function resetTimer() {
        clearInterval(timerId);
        props.setTimer(0);
    }
    return (
        <div className="timer-actions">
            <button onClick={startTimer}>Start</button>
            <button onClick={stopTimer}>Stop</button>
            <button onClick={resetTimer}>Reset</button>
        </div>
    )
}

TimerActions.propTypes = {
    timer: PropTypes.number,
    changeTimerVal: PropTypes.func
};

export default TimerActions;
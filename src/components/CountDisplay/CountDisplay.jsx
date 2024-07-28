// Functions can receive props as arguments
import PropTypes from 'prop-types';

function CountDisplay(props) {
    // state
    let {timer} = props;
    return <h1>{timer}</h1>
}

CountDisplay.propTypes = {
    timer: PropTypes.number.isRequired
};

export default CountDisplay;
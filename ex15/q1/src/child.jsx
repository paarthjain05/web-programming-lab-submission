import PropTypes from 'prop-types';

function Child({ message }) {
  return <p>Message from Parent: {message}</p>;
}

Child.propTypes = {
  message: PropTypes.string.isRequired,
};

export default Child;

import PropTypes from 'prop-types';

function Notification({ message }) {
  return <p>{message}</p>;
}
export default Notification;

PropTypes.Notification = {
  message: PropTypes.string,
};

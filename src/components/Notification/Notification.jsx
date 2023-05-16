import css from 'components/Notification/Notification.module.css';
import propTypes from 'prop-types';

const Notification = ({ title }) => {
  return <p className={css.Notification}>{title}</p>;
};
Notification.propTypes = {
    title: propTypes.string
}
export default Notification;

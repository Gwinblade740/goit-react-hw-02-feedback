import propTypes from 'prop-types';
import css from 'components/AppSection/AppSection.module.css';

const AppSection = ({ title, children }) => {
  return (
    <section className={css.section}>
      <h2 className={css.title}>{title}</h2>
      {children}
    </section>
  );
};
AppSection.propTypes = {
  title: propTypes.string,
};
export default AppSection;

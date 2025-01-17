import "./Button.scss";
import PropTypes from "prop-types";

export default function Button({ onClick, children }) {



  return (
    <button className="button" onClick={onClick}>
      {children}
    </button>
  );
}

Button.propTypes = {
  onClick: PropTypes.func,
  children: PropTypes.node,
};

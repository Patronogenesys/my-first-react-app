import "./FlexGroup.scss";
import PropTypes from "prop-types";

export default function FlexGroup({ gap, children }) {
  const styles = {
    gap: `${gap}px`,
  };
  return (
    <div className="flex-group" style={styles}>
      {children}
    </div>
  );
}

FlexGroup.propTypes = {
  children: PropTypes.node,
  gap: PropTypes.number.isRequired,
};

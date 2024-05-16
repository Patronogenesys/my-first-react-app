import "./FlexGroupJoined.scss";
import PropTypes from "prop-types";

export default function FlexGroupJoined({ children }) {
  return <div className="flex-group-joined">{children}</div>;
}

FlexGroupJoined.propTypes = {
  children: PropTypes.node,
};

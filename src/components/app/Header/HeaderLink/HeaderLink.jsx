import "./HeaderLink.scss";
import PropTypes from "prop-types";

export default function HeaderLink({ href, isActive = false, children }) {
  return (
    <a href={href}>
      <div className={"header--link" + (isActive ? "--active" : "")}>
        {children}
      </div>
    </a>
  );
}

HeaderLink.propTypes = {
  href: PropTypes.string,
  isActive: PropTypes.bool,
  children: PropTypes.node,
};

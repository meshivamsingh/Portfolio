import React from 'react';
import PropTypes from 'prop-types';

const Button = ({ name, isBeam = false, containerClass = '', onClick }) => {
  return (
    <button
      className={`btn ${isBeam ? 'btn-beam' : ''} ${containerClass}`}
      onClick={onClick}
      aria-label={name} // Accessibility improvement
    >
      {isBeam && (
        <span className="relative flex h-3 w-3">
          <span className="btn-ping"></span>
          <span className="btn-ping_dot"></span>
        </span>
      )}
      {name}
    </button>
  );
};

// Prop types for type checking
Button.propTypes = {
  name: PropTypes.string.isRequired,
  isBeam: PropTypes.bool,
  containerClass: PropTypes.string,
  onClick: PropTypes.func.isRequired,
};

// Default props
Button.defaultProps = {
  isBeam: false,
  containerClass: '',
};

export default Button;
import React from "react";
import PropTypes from "prop-types";
import classnames from "classnames";

const TextFieldGroup = ({name, value, label, type, onChange, formClasses, error}) => {
    return (
        <div className={formClasses}>
            <label htmlFor="name">{label}</label>
            <input required
                   type={type}
                   className={classnames("form-control", {"is-invalid": error})}
                   name={name}
                   value={value}
                   onChange={onChange}
            />
            {error && <span className="invalid-feedback">{error}</span>}
        </div>
    );

};

TextFieldGroup.propTypes = {
    name: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    onChange: PropTypes.func.isRequired,
    type: PropTypes.string.isRequired,
    formClasses: PropTypes.string,
    error: PropTypes.string
};

TextFieldGroup.defaultProps = {
    type: "text",
    formClasses: "form-group"
};

export default TextFieldGroup;

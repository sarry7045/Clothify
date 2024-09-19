import "../SCSS/Form.styles.scss";

const Form = ({ label, ...otherProps }) => {
  return (
    <div className="group">
      <input {...otherProps} className="form-input" />
      {label && (
        <label
          className={`${
            otherProps.value.length ? "shrink" : ""
          } form-input-label`}
        >
          {label}
        </label>
      )}
      {/* <input type='password' required name='password' value={value} onChange={handleChange} /> */}
    </div>
  );
};

export default Form;

function Button({ btnText, type, theme, fn }) {
  return (
    <button
      onClick={fn}
      className={`btn ${theme}-${type}-btn`}
    >
      {btnText}
    </button>
  );
}

export default Button;
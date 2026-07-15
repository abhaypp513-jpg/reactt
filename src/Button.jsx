// function Button(props) {

//   const { btnText, type,theme, fn } = props;

//   return <button onClick={fn} className={`btn ${btnText === "Increment"? "inc-btn": "dec-btn"} ${theme}-${type}-btn`} >{btnText}</button>;
// }

// export default Button;

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


import Button from "./Button"

function MainPage({theme}) {
  return (
    <div>
      <h1 style={{color: theme === "light"? "black": "white"}}>Lorem ipsum dolor sit amet.</h1>
      <p style={{color: theme === "light"? "black": "white"}}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium consequuntur provident quisquam voluptas, error eveniet optio? Sit dolorum ratione quae tempore fugit. Voluptate vitae fuga quibusdam autem quas hic facere numquam laboriosam sint dicta? Rem recusandae quae dolor blanditiis perspiciatis.</p>
      <div>
        <Button theme={theme} type="primary" btnText="Primary Button"/>
        <Button theme={theme} type="secondary" btnText="Secondary Button"/>
      </div>
    </div>
  )
}

export default MainPage
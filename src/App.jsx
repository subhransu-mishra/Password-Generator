import { useState, useCallback } from 'react';
import './App.css';

function App() {
  const [length, setLength] = useState("8");
  const [allowNumber, setAllowNumber] = useState(false);
  const [allowCharacter, setAllowCharacter] = useState(false);
  const [pass, setPass] = useState("");

  const passwordGenerator = useCallback(() => {
    let password = '';
    let character = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
    if (allowNumber) character += '0123456789';
    if (allowCharacter) character += '!@#$%^&*()_+';
    for (let i = 0; i < length; i++) {
      let gcharacter = Math.floor(Math.random() * character.length);
      password += character.charAt(gcharacter);
    }
    setPass(password);
  }, [length, allowNumber, allowCharacter]);



  return (
    <>
      <h1 className='text-4xl text-center text-black'>Password Generator</h1>
      <div className='w-full max-w-full mx-auto shadow-md rounded-lg px-4 my-8 text-green-600 bg-gray-800' id='main-div'>
        

          <input type='text' placeholder='password' value={pass} className='input-field'></input>
          <button onClick={passwordGenerator} className='btn'>Generate</button>

      </div>
    </>
  );
}

export default App;

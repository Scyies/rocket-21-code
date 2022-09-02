import { ClipboardText } from "phosphor-react";
import React, { useState } from "react";
import {
  lowerCaseLetters,
  numbers,
  specialCharacters,
  upperCaseLetters,
} from "./characters";

export default function GeradorDeSenhas() {
  const [password, setPassword] = useState("");
  const [passwordLength, setPasswordLength] = useState(8);
  const [variables, setVariables] = useState({
    upperCase: false,
    lowerCase: false,
    numbers: false,
    symbols: false,
  });

  function checkBoxs(targetVariable: string) {
    switch (targetVariable) {
      case "upperCase":
        if (variables.upperCase === false) {
          setVariables({ ...variables, upperCase: true });
        } else {
          setVariables({ ...variables, upperCase: false });
        }
        break;
      case "lowerCase":
        if (variables.lowerCase === false) {
          setVariables({ ...variables, lowerCase: true });
        } else {
          setVariables({ ...variables, lowerCase: false });
        }
        break;
      case "numbers":
        if (variables.numbers === false) {
          setVariables({ ...variables, numbers: true });
        } else {
          setVariables({ ...variables, numbers: false });
        }
        break;
      case "symbols":
        if (variables.symbols === false) {
          setVariables({ ...variables, symbols: true });
        } else {
          setVariables({ ...variables, symbols: false });
        }
        break;
    }
  }

  function handlePassword() {
    let characterList = "";

    if (variables.lowerCase) {
      characterList = characterList + lowerCaseLetters;
    }
    if (variables.upperCase) {
      characterList = characterList + upperCaseLetters;
    }
    if (variables.numbers) {
      characterList = characterList + numbers;
    }
    if (variables.symbols) {
      characterList = characterList + specialCharacters;
    }

    setPassword(createPassword(characterList));
  }

  function createPassword(characterList: string) {
    let password = "";
    const characterListLength = characterList.length;

    for (let i = 0; i < passwordLength; i++) {
      const characterIndex = Math.round(Math.random() * characterListLength);
      password = password + characterList.charAt(characterIndex);
    }
    return password;
  }

  function handleCopyPassword() {
    navigator.clipboard.writeText(password);
  }

  return (
    <div className="flex justify-center text-branco-500 mt-10">
      <div className="bg-azul-700 p-4 max-w-md w-full mx-auto rounded-xl">
        <h3 className="flex justify-between mx-2 my-1 font-bold">Gerador de senhas</h3>
        <div className="bg-preto-700 flex rounded-full justify-between place-items-center my-2">
          <h4 className="px-3 py-2 h-10">{password}</h4>
          <button
            onClick={handleCopyPassword}
            className="bg-preto-800 rounded-full p-1 mr-1"
          >
            <ClipboardText size={25} />
          </button>
        </div>
        <div className="flex justify-between mx-2 my-1">
          <label htmlFor="">Comprimento da senha</label>
          <input
            type="number"
            max={20}
            min={8}
            defaultValue={passwordLength}
            onChange={(e) => setPasswordLength(Number(e.target.value))}
            className="text-black px-2 max-w-[55px] rounded-xl outline-none"
          />
        </div>
        <div className="flex justify-between mx-2 my-1">
          <label htmlFor="">Incluir letras maiusculas</label>
          <input
            type="checkbox"
            checked={variables.upperCase}
            onChange={() => checkBoxs("upperCase")}
            className="w-5"
          />
        </div>
        <div className="flex justify-between mx-2 my-1">
          <label htmlFor="">Incluir letras minusculas</label>
          <input
            type="checkbox"
            checked={variables.lowerCase}
            onChange={() => checkBoxs("lowerCase")}
            className="w-5"
          />
        </div>
        <div className="flex justify-between mx-2 my-1">
          <label htmlFor="">Incluir números</label>
          <input
            type="checkbox"
            checked={variables.numbers}
            onChange={() => checkBoxs("numbers")}
            className="w-5"
          />
        </div>
        <div className="flex justify-between mx-2 my-1">
          <label htmlFor="">Incluir simbolos</label>
          <input
            type="checkbox"
            checked={variables.symbols}
            onChange={() => checkBoxs("symbols")}
            className="w-5"
          />
        </div>
        <button
          onClick={handlePassword}
          className="flex justify-between mx-2 my-1 bg-preto-700 px-3 py-2 rounded-full font-bold"
        >
          Criar senha
        </button>
      </div>
    </div>
  );
}

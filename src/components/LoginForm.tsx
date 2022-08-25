import classNames from "classnames";
import { Envelope } from "phosphor-react";
import { useEffect, useState } from "react";
import { Loading } from "./Loading";

export function LoginForm() {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [button, setButton] = useState(false);
  const [erro, setError] = useState("");
  function handleClick(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) {
    e.preventDefault();
    if (button === false) {
      setButton(true);
    } else {
      setButton(false);
    }
  }
  const regexEmail = new RegExp(
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
  );
  const regexSenha = new RegExp('^(?=.*\d).{4,}$');

  useEffect(() => {
    if (email.length > 1) {
      if(regexEmail.test(email) === false) setError("Favor informar um e-mail válido")
      if(regexEmail.test(email) === true) setError('')
    } else {
      setError('')
    }
    if (senha.length > 1) {
      if(regexSenha.test(senha) === false) setError("Sua senha deve ter ao menos 4 caracteres com uma letra e um número")
      if (regexSenha.test(senha) === true) setError('')
    } else {
      setError('')
    }
  },[email, senha]);

  return (
    <div className="m-10 max-w-lg w-full mx-auto">
      <form
        action=""
        className="min-h-[18rem] mx-auto max-w-md bg-white p-4 rounded-lg flex flex-col place-items-center"
      >
        <div
          className={classNames(
            "bg-white my-2 rounded-lg relative group shadow-md border border-gray-500 focus-within:border-blue-500 w-full max-w-xs",
            {
              "border-blue-500": email.length > 0,
            }
          )}
        >
          <label
            htmlFor="input-email"
            className={classNames(
              "absolute px-1 top-[10px] left-[10px] text-gray-800 bg-white group-focus-within:top-[-9px] group-focus-within:left-[15px] group-focus-within:text-sm transition-all group-focus-within:text-blue-500",
              {
                "top-[-9px] left-[15px] text-sm text-blue-500":
                  email.length > 0,
              }
            )}
          >
            E-mail
          </label>
          <input
            type="mail"
            className="px-3 py-3 outline-none rounded-lg w-full"
            autoComplete="off"
            id="input-email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div
          className={classNames(
            "bg-white my-2 mb-4 rounded-lg relative group shadow-md border border-gray-500 focus-within:border-blue-500 w-full max-w-xs",
            {
              "border-blue-500": senha.length > 0,
            }
          )}
        >
          <label
            htmlFor="input-senha"
            className={classNames(
              "absolute px-1 top-[10px] left-[10px] text-gray-800 bg-white group-focus-within:top-[-9px] group-focus-within:left-[15px] group-focus-within:text-sm transition-all group-focus-within:text-blue-500",
              {
                "top-[-9px] left-[15px] text-sm text-blue-500":
                  senha.length > 0,
              }
            )}
          >
            Senha
          </label>
          <input
            type="password"
            className="px-3 py-3 outline-none rounded-lg w-full"
            id="input-senha"
            value={senha}
            onChange={(e) => setSenha(e.target.value)}
          />
        </div>
        <button
          className="px-8 py-3 mb-2 outline-none max-w-xs w-full rounded-lg bg-gray-300 shadow-md hover:bg-blue-500 hover:text-white transition-all active:scale-90 active:translate-y-1"
          onClick={handleClick}
        >
          {button === true ? <Loading /> : "Entrar"}
        </button>
        <div className="flex justify-between w-full max-w-xs px-1">
          <div className="flex place-items-center">
            <input type="checkbox" className="mr-1" />
            <p className="text-sm">Lembrar acesso</p>
          </div>
          <p className="text-sm hover:underline hover:text-red-500 transition-all cursor-pointer">
            Esqueci a senha
          </p>
        </div>
        {erro.length > 1 && (
          <div className="border border-red-500 bg-red-300 text-red-900 max-w-xs w-full text-center m-4 rounded-lg py-2 px-3">
            <p>{erro}</p>
          </div>
        )}
      </form>
    </div>
  );
}

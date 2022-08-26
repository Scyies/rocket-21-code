import classNames from "classnames";
import { Check, CheckCircle, NumberCircleFour, NumberCircleOne, NumberCircleThree, NumberCircleTwo, XCircle } from "phosphor-react";
import { useState } from "react";

export function QuizzForm() {
  const [state, setState] = useState({
    primeiro: false,
    segundo: false,
    terceiro: false,
    quarto: false,
  });
  function clickHandler(target: string) {
    const option = target;

    switch (option) {
      case 'primeiro':
        if(state.primeiro === false) {setState({ ...state, primeiro: true})}
        if(state.primeiro === true) {setState({ ...state, primeiro: false})}
        break;
      case 'segundo':
        if(state.segundo === false) {setState({ ...state, segundo: true})}
        if(state.segundo === true) {setState({ ...state, segundo: false})}
        break;
      case 'terceiro':
        if(state.terceiro === false) {setState({ ...state, terceiro: true})}
        if(state.terceiro === true) {setState({ ...state, terceiro: false})}
        break;
    }
  }

  return (
    <div className="flex flex-col place-items-center p-4">
      <div className="bg-gray-700 flex flex-col place-items-center max-w-sm text-center p-6 rounded-lg">
        <div className="text-white font-bold break-after-auto">
          <p>Qual das opçoes abaixo se considera uma biblioteca e não um framework</p>
        </div>
        <div
          className={classNames("text-white border border-black font-bold rounded-lg min-w-[150px] justify-center p-2 m-2 group flex place-items-center transition-all", {
            'bg-green-300 text-black' : state.primeiro === true,
            'bg-black' : state.primeiro === false
          })}
          onClick={() => clickHandler('primeiro')}
        >
          <i className={classNames("rounded-full aspect-square flex place-items-center justify-center overflow-hidden mr-1 transition-all", {
            'bg-green-300 text-black' : state.primeiro === true,
            'bg-black' : state.primeiro === false
          })}>
            {state.primeiro === true ? <CheckCircle size={20} weight="bold" /> : <NumberCircleOne size={20} weight="bold" />}
          </i>
          <label htmlFor="">React</label>
        </div>
        <div
          className={classNames("text-white border border-black font-bold rounded-lg min-w-[150px] justify-center p-2 m-2 group flex place-items-center transition-all", {
            'bg-red-300 text-black' : state.segundo === true,
            'bg-black' : state.segundo === false
          })}
          onClick={() => clickHandler('segundo')}
        >
          <i className={classNames("rounded-full aspect-square flex place-items-center justify-center overflow-hidden mr-1 transition-all", {
            'bg-red-300 text-black' : state.segundo === true,
            'bg-black' : state.segundo === false
          })}>
            {state.segundo === true ? <XCircle size={20} weight="bold" /> : <NumberCircleTwo size={20} weight="bold" />}
          </i>
          <label htmlFor="">Vue</label>
        </div>
        <div
          className={classNames("text-white border border-black font-bold rounded-lg min-w-[150px] justify-center p-2 m-2 group flex place-items-center transition-all", {
            'bg-red-300 text-black' : state.terceiro === true,
            'bg-black' : state.terceiro === false
          })}
          onClick={() => clickHandler('terceiro')}
        >
          <i className={classNames("rounded-full aspect-square flex place-items-center justify-center overflow-hidden mr-1 transition-all", {
            'bg-red-300 text-black' : state.terceiro === true,
            'bg-black' : state.terceiro === false
          })}>
            {state.terceiro === true ? <XCircle size={20} weight="bold" /> : <NumberCircleThree size={20} weight="bold" /> }
          </i>
          <label htmlFor="">Angular</label>
        </div>
      </div>
    </div>
  );
}

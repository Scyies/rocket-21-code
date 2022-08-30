import classNames from "classnames";
import { CheckCircle, NumberCircleOne, NumberCircleThree, NumberCircleTwo, XCircle } from "phosphor-react";
import { useState } from "react";

export function QuizzForm() {
  const [state, setState] = useState({
    primeiro: false,
    segundo: false,
    terceiro: false,
  });
  const quizzes = [
    {
      pergunta: 'Qual das opçoes abaixo se considera uma biblioteca e não um framework?',
      primeira: {
        texto: 'React',
        resultado: 'correta'
      },
      segunda: {
        texto: 'Vue',
        resultado: 'errada'
      },
      terceira: {
        texto: 'Angular',
        resultado: 'errada'
      }
    },
    {
      pergunta: 'O que a propriedade clear faz em CSS?',
      primeira: {
        texto: 'Limpa o campo',
        resultado: 'errada'
      },
      segunda: {
        texto: 'Diminiu sua opacidade',
        resultado: 'errada'
      },
      terceira: {
        texto: 'Especifica onde elementos não podem flutuar',
        resultado: 'correta'
      }
    }
  ]
  const [question, setQuestion] = useState(0);
  console.log(quizzes.length);
  console.log(question);
  
  
  function clickHandler(target: string) {
    const option = target;

    switch (option) {
      case 'primeiro':
        if(state.primeiro === false) {
          setState({ ...state, primeiro: true})
          if(quizzes[question].primeira.resultado === 'correta') {
            setTimeout(() => {
              setState({ ...state, primeiro: false, segundo: false, terceiro: false})
              if(question < quizzes.length - 1) {
                setQuestion(question + 1)
              } else {
                setQuestion(0)
              }
            }, 2000)
          }
        }
        break;
      case 'segundo':
        if(state.segundo === false) {
          setState({ ...state, segundo: true})
          if(quizzes[question].segunda.resultado === 'correta') {
            setTimeout(() => {
              setState({ ...state, primeiro: false, segundo: false, terceiro: false})
              if(question < quizzes.length - 1) {
                setQuestion(question + 1)
              } else {
                setQuestion(0)
              }
            }, 2000)
          }
        }
        break;
      case 'terceiro':
        if(state.terceiro === false) {
          setState({ ...state, terceiro: true})
          if(quizzes[question].terceira.resultado === 'correta') {
            setTimeout(() => {
              setState({ ...state, primeiro: false, segundo: false, terceiro: false})
              if(question < quizzes.length - 1) {
                setQuestion(question + 1)
              } else {
                setQuestion(0)
              }
            }, 2000)
          }
        }
        break;
    }
  }

  return (
    <div className="flex flex-col place-items-center p-4 m-8">
      <div className="bg-preto-700 flex flex-col place-items-center max-w-sm text-center rounded-lg">
        <div className="text-branco-500 bg-azul-900 p-4 w-full rounded-t-lg font-bold break-after-auto">
          <p>{quizzes[question].pergunta}</p>
        </div>
        <div
          className={classNames("text-white border-2 border-preto-800 font-bold rounded-lg min-w-[150px] justify-center p-2 m-2 group flex place-items-center transition-all", {
            'bg-green-300 text-preto-800 border-green-300' : state.primeiro === true && quizzes[question].primeira.resultado === 'correta',
            'text-branco-500' : state.primeiro === false,
            'bg-red-300 text-preto-800 border-red-300' : state.primeiro === true && quizzes[question].primeira.resultado === 'errada'
          })}
          onClick={() => clickHandler('primeiro')}
        >
          <i className={classNames("rounded-full aspect-square flex place-items-center justify-center overflow-hidden mr-1 transition-all")}>
            {state.primeiro === true ? <CheckCircle size={20} weight="bold" /> : <NumberCircleOne size={20} weight="bold" />}
          </i>
          <label htmlFor="">{quizzes[question].primeira.texto}</label>
        </div>
        <div
          className={classNames("text-white border-2 border-preto-800 font-bold rounded-lg min-w-[150px] justify-center p-2 m-2 group flex place-items-center transition-all", {
            'bg-red-300 text-preto-800 border-red-300' : state.segundo === true && quizzes[question].segunda.resultado === 'errada',
            'text-branco-500' : state.segundo === false,
            'bg-green-300 text-preto-800 border-green-300' : state.segundo === true && quizzes[question].segunda.resultado === 'correta'
          })}
          onClick={() => clickHandler('segundo')}
        >
          <i className={classNames("rounded-full aspect-square flex place-items-center justify-center overflow-hidden mr-1 transition-all")}>
            {state.segundo === true ? <XCircle size={20} weight="bold" /> : <NumberCircleTwo size={20} weight="bold" />}
          </i>
          <label htmlFor="">{quizzes[question].segunda.texto}</label>
        </div>
        <div
          className={classNames("text-white border-2 border-preto-800 font-bold rounded-lg min-w-[150px] justify-center p-2 m-2 group flex place-items-center transition-all", {
            'bg-red-300 text-preto-800 border-red-300' : state.terceiro === true && quizzes[question].terceira.resultado === 'errada',
            'text-branco-500' : state.terceiro === false,
            'bg-green-300 text-preto-800 border-green-300' : state.terceiro === true && quizzes[question].terceira.resultado === 'correta'
          })}
          onClick={() => clickHandler('terceiro')}
        >
          <i className={classNames("rounded-full aspect-square flex place-items-center justify-center overflow-hidden mr-1 transition-all")}>
            {state.terceiro === true ? <XCircle size={20} weight="bold" /> : <NumberCircleThree size={20} weight="bold" /> }
          </i>
          <label htmlFor="">{quizzes[question].terceira.texto}</label>
        </div>
      </div>
    </div>
  );
}

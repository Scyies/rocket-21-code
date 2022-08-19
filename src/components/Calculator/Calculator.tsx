import {
  Backspace,
  Divide,
  Equals,
  Minus,
  Plus,
  X,
} from "phosphor-react";
import { useReducer } from "react";
import { DigitButton } from "./DigitButton";
import { OperationButton } from "./OperationButton";

export const ACTIONS = {
  ADD_DIGIT: "add-digit",
  CHOOSE_OPERATION: "choose-operation",
  CLEAR: "clear",
  DELETE_DIGIT: "delete-digit",
  EVALUATE: "evalueate",
};

function reducer(state: any, { type, payload }: any) {
  switch (type) {
    case ACTIONS.ADD_DIGIT:
      if (state.overwrite) {
        return {
          ...state,
          currentOperand: payload.digit,
          overwrite: false
        }
      }
      if (payload.digit === "0" && state.currentOperand === "0") return state;
      if (payload.digit === "." && state.currentOperand.includes("."))
        return state;
      return {
        ...state,
        currentOperand: `${state.currentOperand || ""}${payload.digit}`,
      };

    case ACTIONS.CHOOSE_OPERATION:
      if (state.currentOperand == null && state.previousOperand == null)
        return state;

      if (state.currentOperand == null) {
        return {
          ...state,
          operation: payload.operation,
        };
      }

      if (state.previousOperand == null) {
        return {
          ...state,
          operation: payload.operation,
          previousOperand: state.currentOperand,
          currentOperand: null,
        };
      }

      return {
        ...state,
        previousOperand: evaluate(state),
        operation: payload.operation,
        currentOperand: null,
      };

    case ACTIONS.CLEAR:
      return {};

    case ACTIONS.DELETE_DIGIT:
      if (state.overwrite) {
        return {
          ...state,
          overwrite: false,
          currentOperand: null
        }
      }
      if(state.currentOperand == null) return state
      if(state.currentOperand.length === 1) return {...state, currentOperand: null}

      return {
        ...state,
        currentOperand: state.currentOperand.slice(0, -1)
      }

    case ACTIONS.EVALUATE:
      if (
        state.operation == null ||
        state.currentOperand == null ||
        state.previousOperand == null
      ){
        return state;
      }
      return {
        ...state,
        overwrite: true,
        previousOperand: null,
        operation: null,
        currentOperand: evaluate(state)
      }
      
  }
}

function evaluate({ currentOperand, previousOperand, operation }: any) {
  const prev = parseFloat(previousOperand);
  const current = parseFloat(currentOperand);
  if (isNaN(prev) || isNaN(current)) return "";
  let computation = 0;
  switch (operation) {
    case "+":
      computation = prev + current;
      break;
    case "-":
      computation = prev - current;
      break;
    case "*":
      computation = prev * current;
      break;
    case "÷":
      computation = prev / current;
      break;
  }

  return computation.toString();
}

const INTEGER_FORMATTER = new Intl.NumberFormat('en-us', {
  maximumFractionDigits: 0,
})

function formatOperand(operand: any) {
  if(operand == null) return
  const [integer, decimal] = operand.split('.')
  if(decimal == null) return INTEGER_FORMATTER.format(integer)
  return `${INTEGER_FORMATTER.format(integer)}.${decimal}`
}

export function Calculator() {
  const [{ currentOperand, previousOperand, operation }, dispatch] = useReducer(
    reducer,
    {}
  );

  return (
    <div className="flex flex-col place-items-center justify-center mt-10">
      <p className="text-white font-bold text-xl p-5">Calculadora</p>
      <div className="bg-gray-700 text-white">
        <div className="flex flex-col justify-around text-right mr-2 mt-2 ml-2 relative min-h-[3rem]">
          <div className="text-xs font-bold opacity-75 break-all min-h-[1.25rem] max-w-[196px]">
            {formatOperand(previousOperand)} {operation}
          </div>
          <div className="font-bold break-all min-h-[1.7rem] max-w-[196px]">{formatOperand(currentOperand)}</div>
        </div>
        <div className="grid grid-cols-4 gap-1 grid-rows-5 place-items-center font-bold p-1">
          <button
            className="min-h-[3rem] min-w-[6rem] w-full col-span-2 justify-center flex place-items-center bg-[#032d50] hover:bg-[#00a1ef] transition-colors active:opacity-60 cursor-default"
            onClick={() => dispatch({ type: ACTIONS.CLEAR })}
          >
            CE
          </button>
          <button className="aspect-square min-w-[3rem] justify-center flex place-items-center bg-[#032d50] hover:bg-[#00a1ef] transition-colors active:opacity-60 cursor-default"
            onClick={() => dispatch({ type: ACTIONS.DELETE_DIGIT })}
          >
            <Backspace size={20} />
          </button>
          <OperationButton operation={"÷"} dispatch={dispatch}>
            {" "}
            <Divide size={20} />{" "}
          </OperationButton>
          <DigitButton digit={"7"} dispatch={dispatch} />
          <DigitButton digit={"8"} dispatch={dispatch} />
          <DigitButton digit={"9"} dispatch={dispatch} />
          <OperationButton operation={"*"} dispatch={dispatch}>
            {" "}
            <X size={20} />{" "}
          </OperationButton>
          <DigitButton digit={"4"} dispatch={dispatch} />
          <DigitButton digit={"5"} dispatch={dispatch} />
          <DigitButton digit={"6"} dispatch={dispatch} />
          <OperationButton operation={"-"} dispatch={dispatch}>
            {" "}
            <Minus size={20} />{" "}
          </OperationButton>
          <DigitButton digit={"1"} dispatch={dispatch} />
          <DigitButton digit={"2"} dispatch={dispatch} />
          <DigitButton digit={"3"} dispatch={dispatch} />
          <OperationButton operation={"+"} dispatch={dispatch}>
            {" "}
            <Plus size={20} />{" "}
          </OperationButton>
          <DigitButton digit={"."} dispatch={dispatch} />
          <DigitButton digit={"0"} dispatch={dispatch} />
          <button
            className="min-h-[3rem] min-w-[6rem] w-full col-span-2 justify-center flex place-items-center bg-[#032d50] hover:bg-[#00a1ef] transition-colors active:opacity-60 cursor-default"
            onClick={() => dispatch({ type: ACTIONS.EVALUATE })}
          >
            <Equals size={20} />
          </button>
        </div>
      </div>
    </div>
  );
}

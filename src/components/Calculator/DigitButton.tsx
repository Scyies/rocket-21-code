import { ReactNode } from "react";
import { ACTIONS } from "./Calculator";

interface Props {
  dispatch: React.Dispatch<{
    type: any;
    payload: any;
  }>;
  digit: string;
  children?: ReactNode
}

export function DigitButton({ dispatch, digit, children }: Props) {
  return (
    <button
      className="aspect-square min-w-[3rem] justify-center flex place-items-center bg-[#032d50] hover:bg-[#00a1ef] transition-colors active:opacity-60 cursor-default"
      onClick={() => dispatch({ type: ACTIONS.ADD_DIGIT, payload: { digit } })}
    >
      {children ? children : digit}
    </button>
  );
}

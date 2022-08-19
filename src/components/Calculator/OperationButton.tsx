import { ReactNode } from "react";
import { ACTIONS } from "./Calculator";

interface Props {
  dispatch: React.Dispatch<{
    type: string;
    payload: any;
  }>;
  operation: string;
  children?: ReactNode
}

export function OperationButton({ dispatch, operation, children }: Props) {
  return (
    <button
      className="aspect-square min-w-[3rem] justify-center flex place-items-center bg-[#032d50] hover:bg-[#00a1ef] transition-colors active:opacity-60 cursor-default"
      onClick={() => dispatch({ type: ACTIONS.CHOOSE_OPERATION, payload: { operation } })}
    >
      {children ? children : operation}
    </button>
  );
}

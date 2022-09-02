import React, { useState } from "react";
import emojis from "../emoji.json";

export default function EmojisClip() {
  const [emojiState, setEmojiState] = useState<string>('');
  function handleCopy(e: any) {
    setEmojiState(e.target.value)
    navigator.clipboard.writeText(emojiState);
  }

  return (
    <div className="m-5">
      <div className='max-w-xs mx-auto text-center font-bold text-preto-800 dark:text-branco-500 bg-branco-300 dark:bg-azul-700 rounded-t-2xl p-3'>
        <p>Seu emoji picker!</p>
      </div>
      <div className="grid grid-cols-4 gap-4 p-4 max-w-xs mx-auto bg-cinza-500 dark:bg-preto-800 rounded-b-2xl">
        {emojis.map((emoji) => (
          <button 
            onClick={handleCopy} 
            key={emoji.id}
            value={emoji.emoji}
            className="aspect-square border border-azul-700 dark:border-branco-300 rounded-2xl shadow-md active:bg-branco-200 dark:active:bg-preto-600 active:scale-95"
          >
            {emoji.emoji}
          </button>
        ))}
      </div>
    </div>
  );
}

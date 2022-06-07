import React, { useCallback, useEffect, useState } from 'react';

import { v4 } from 'uuid';

interface ITextFieldProps {
  word: string;
  onWin(): void;
}

const TextField: React.FC<ITextFieldProps> = ({ word, onWin }) => {
  const [typed, setTyped] = useState<string[]>([]);

  const [isWinner, setIsWinner] = useState(false);

  const onChangeText = useCallback(
    (event: any) => {
      if (isWinner) return;

      const text = event.key;
      const splited = word.split('');

      if (splited[typed.length] === text) {
        setTyped(st => {
          const nextSt = [...st, text];

          if (splited.length === nextSt.length) {
            onWin();
            setIsWinner(true);
          }

          return nextSt;
        });
      } else {
        setTyped([]);
      }
    },
    [isWinner, onWin, typed.length, word],
  );

  useEffect(() => {
    document.addEventListener('keydown', onChangeText, false);

    return () => {
      document.removeEventListener('keydown', onChangeText, false);
    };
  }, [onChangeText]);

  return (
    <div className="flex flex-col items-center">
      <ul className="flex">
        {word.split('').map((item, index) => (
          <li
            key={v4()}
            className={`uppercase font-semibold underline ${
              index !== 0 ? 'ml-4' : ''
            }`}
          >
            {typed[index] ? typed[index] : '_'}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TextField;

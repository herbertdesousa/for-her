import React, { useState } from 'react';
import { useRouter } from 'next/router';

import { MdChevronRight } from 'react-icons/md';
import { Button, TextField } from '../components';

const QuizI: React.FC = () => {
  const router = useRouter();

  const [isShowingNextButton, setIsShowingNextButton] = useState(false);

  return (
    <div className="px-6 pt-16">
      <h1 className="text-2xl font-semibold">O que é? O que é?</h1>
      <p className="text-accent-4 mt-6">Lugar do primeiro beijo</p>

      <div className="flex flex-1 flex-col items-center mt-16">
        <TextField word="parque" onWin={() => setIsShowingNextButton(true)} />

        {isShowingNextButton && (
          <Button className="w-14 mt-16" onClick={() => router.push('/step-1')}>
            <MdChevronRight size={24} />
          </Button>
        )}
      </div>

      <div className="mt-64">
        <strong>Dica</strong>
        <span>* o lugar tem árvores e estava no fim da tarde</span>
      </div>
    </div>
  );
};

export default QuizI;

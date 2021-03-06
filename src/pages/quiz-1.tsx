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
      <p className="text-accent-4 mt-6">
        você tem e usa todo dia, se deixar cair no chão quebra o chão, vive sem
        bateria e travando
      </p>

      <div className="flex flex-1 flex-col items-center mt-16">
        <TextField word="celular" onWin={() => setIsShowingNextButton(true)} />

        {isShowingNextButton && (
          <Button className="w-14 mt-16" onClick={() => router.push('/quiz-2')}>
            <MdChevronRight size={24} />
          </Button>
        )}
      </div>

      <div className="mt-64">
        <strong>Dica</strong>
        <span>* parente do nokia</span>
      </div>
    </div>
  );
};

export default QuizI;

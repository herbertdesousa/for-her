import React, { useEffect, useState } from 'react';

const Home: React.FC = () => {
  const [containerOpacity, setContainerOpacity] = useState(0);

  useEffect(() => {
    setContainerOpacity(1);
  }, []);

  return (
    <div
      className="flex flex-col items-center justify-center h-screen px-6"
      style={{ opacity: containerOpacity, transition: 'all 2s' }}
    >
      <p className="text-center font-semibold">
        {`
          Desde quando começamos a conversar nunca pensei que chegariamos onde
          chegamos, é estranho pensar que te enchergava como a "menina do eu
          nunca" e hoje só queria ser o Paxton apaixonado por você. Você me ajudou
          a mudar muitas coisas ruins que tinham em mim, você me ajuda muito a ser
          uma pessoa melhor e você é a inspiração de muita coisa pra mim, obrigado
          por existir Victória Fernanda.
        `}
      </p>
      <span className="text-red font-bold text-3xl mt-8">Eu Te Amo!</span>
    </div>
  );
};

export default Home;

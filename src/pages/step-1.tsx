import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';

import { MdChevronRight } from 'react-icons/md';
import { Button } from '../components';

const Home: React.FC = () => {
  const router = useRouter();

  const [containerOpacity, setContainerOpacity] = useState(0);

  useEffect(() => {
    setContainerOpacity(1);
  }, []);

  const goToNextPage = () => {
    setContainerOpacity(0);
    setTimeout(() => {
      router.push('/step-2');
    }, 1000);
  };

  return (
    <div
      className="flex flex-col items-center justify-center h-screen px-6"
      style={{ opacity: containerOpacity, transition: 'all 2s' }}
    >
      <h1 className="text-2xl text-center font-semibold">
        Então você realmente é a Victória Fernanda, alegria!!
      </h1>

      <Button className="w-14 mt-6" onClick={goToNextPage}>
        <MdChevronRight size={24} />
      </Button>
    </div>
  );
};

export default Home;

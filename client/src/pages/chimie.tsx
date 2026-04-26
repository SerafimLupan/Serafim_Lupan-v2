import React from 'react';

const Chimie = () => {
  return (
    <div className="flex flex-col items-center min-h-screen p-8">
       {/* Titlu */}
      <h1 className="text-center text-[40px] md:text-[72px] font-bold my-10">
        Săpunurile: Chimie Organică
      </h1>

      {/* Video */}
      <div className="w-full flex justify-center mb-10">
        <div className="aspect-video w-full max-w-[1000px]">
          <iframe 
            className="w-full h-full rounded-xl shadow-lg"
            src="https://www.youtube.com/embed/UV1OchR0Qdg?si=u7PaRn_2rPxJs1RW" 
            title="Videoclipul" 
            frameBorder="0" 
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
            allowFullScreen>
          </iframe>
        </div>
      </div>

      {/* Prezentare */}
      <div className="w-full flex justify-center">
        <iframe 
          src="https://prezi.com/p/embed/eFCU52KJLZiOd8nQ8izo/" 
          webkitallowfullscreen="true" 
          mozallowfullscreen="true" 
          allowfullscreen="true" 
          allow="autoplay; fullscreen" 
          className="w-full max-w-[1000px] h-[500px] rounded-xl shadow-lg"
          frameBorder="0">
        </iframe>
      </div>

      <div className="w-full flex justify-center">
        <a 
          href="https://prezi.com/view/eFCU52KJLZiOd8nQ8izo/" 
          target="_blank" 
          rel="noopener noreferrer"
          className="mt-4 text-blue-500 underline">
          Nu se încarcă prezentarea? Vezi direct pe Prezi.
        </a>
      </div>
    </div>
  );
};

export default Chimie;

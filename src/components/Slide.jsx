import React from 'react';

function Slide({ texte, backgroundImg }) {
    return (
        <div 
            style={{ backgroundImage: `url(${backgroundImg})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
            className="w-full h-screen flex flex-col justify-center items-center text-center text-white"        >
            <h1 className="text-5xl font-bold mb-4 text-yellow-600">Haute Ecole d'Informatique</h1>
            <p className="text-xl mb-8 max-w-2xl mx-auto text-white">{texte}</p>
            <div className="flex gap-4">
                <button className='px-4 py-2 text-sm text-blue-950 duration-100 bg-white rounded-md shadow-md focus:shadow-none ring-offset-2 ring-blue-600 focus:ring-2'>
                    Inscriver vous ici
                </button>
                <button className='px-4 py-2 text-sm text-white duration-100 bg-yellow-600 rounded-md shadow-md focus:shadow-none ring-offset-2 ring-blue-600 focus:ring-2'>
                    Emploi du temps
                </button>
                <button className='px-5 py-2.5 text-white bg-blue-950 rounded-md shadow-md focus:shadow-none duration-100 ring-offset-2 ring-blue-700 focus:ring-2'>
                    Programme Pedagogique
                </button>
            </div>
        </div>
    );
}

export default Slide;
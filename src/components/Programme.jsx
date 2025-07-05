import image from '../assets/img/img-peda.png';

function Programme() {
    return (
        <div className="flex flex-col md:flex-row bg-white py-8 px-4 sm:px-8 md:px-16 text-blue-950">
            <div className="md:w-1/3 flex justify-center mb-6 md:mb-0">
                <img
                    src={image}
                    alt="Programme Illustration"
                    className="w-full max-w-[300px] md:max-w-none h-auto object-cover"
                />
            </div>
            <div className="md:w-2/3 flex flex-col justify-center">
                <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold px-4 sm:px-6 md:px-9 mb-4 md:mb-6">
                    Le programme pédagogique
                </h1>
                <p className="text-base sm:text-lg md:text-xl px-4 sm:px-6 md:px-9 mb-6 md:mb-8">
                    Suivant le système LMD, jusqu’au Master, notre formation repose sur un programme pédagogique conçu en adéquation avec les attentes du marché. La formation est sanctionnée par un diplôme de Licence et de Master en Informatique reconnu par le MESupRes de Madagascar.
                </p>
                <div className="px-4 sm:px-6 md:px-9">
                    <button className="btn btn-ghost border-2 border-blue-950 text-blue-950 hover:bg-blue-950 hover:text-white transition-colors px-6 py-3 text-sm sm:text-base rounded-md">
                        Notre Programme
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Programme;
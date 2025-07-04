import image from '../assets/img/img-peda.png'
function Programme() {
    return (
        <div className="flex bg-white p-16 text-blue-950">
            <img src={image} alt="sary 1" className='w-1/3' />
            <div>
            <h1 className='text-4xl p-9'>Le programme pédagogique</h1>
            <p className='text-xl px-9'>Suivant le système LMD, jusqu’au Master, notre formation repose sur un programme pédagogique conçu en adéquation avec les attentes du marché. La formation est sanctionnée par un diplôme de Licence et de Master en Informatique reconnu par le MESupRes de Madagascar.</p>
            <button className='btn border-2 border-blue-950 p-4 btn-ghost m-9'>Notre Programme</button>
            </div>
        </div>
    )
}
export default Programme
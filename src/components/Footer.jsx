
import logoHei from '../assets/img/Logo HEI.png';

function Footer() {
    return (
        <div className=" px-10 py-8 bg-blue-950">
            <div className="">
                <img src={logoHei} className='w-24'/>
            </div>
            <div className="flex ">
                <div className='flex-col'>
                    <h1 className="text3xl">Navigation</h1>
                    <a className="text-yellow-600" href="/about"> ACCUEIL</a>
                    <a className="hover:text-yellow-600" href="/about">ACTUALITE</a>
                    <a className="hover:text-yellow-600" href="/about">BOURSE D'ETUDES</a>
                    <a className="hover:text-yellow-600" href="/about">INSCRIPTION</a>

                </div>
            </div>
        </div>
    )
}
export default Footer
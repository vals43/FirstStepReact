function AdmissionSection() {
    return (
      <div className="bg-blue-600 text-white py-12 px-6">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-4">Admission</h2>
          <p className="mb-10">
            Ouverte aux bacheliers de toutes les séries, l’admission chez HEI se fait par test de niveau :<br />
            une épreuve de français niveau B2 et d’une épreuve de mathématiques niveau Terminale D.
          </p>
  
          <div className="grid md:grid-cols-3 gap-4 text-left text-black">

            <div className="bg-yellow-200 p-6 rounded-md">
              <h3 className="text-2xl font-bold text-white bg-yellow-500 inline-block px-3 py-1 rounded-full mb-4">
                01
              </h3>
              <p>
                <strong>Dépôt de dossiers</strong> : pour les bacheliers de toutes séries sans limite d’âge
              </p>
            </div>
  
            <div className="bg-yellow-300 p-6 rounded-md">
              <h3 className="text-2xl font-bold text-white bg-yellow-500 inline-block px-3 py-1 rounded-full mb-4">
                02
              </h3>
              <p>
                <strong>Test de niveau</strong> : composé d’une épreuve de français niveau B2 et
                d’une épreuve de mathématiques niveau Terminale D
              </p>
            </div>
  

            <div className="bg-yellow-400 p-6 rounded-md">
              <h3 className="text-2xl font-bold text-white bg-yellow-500 inline-block px-3 py-1 rounded-full mb-4">
                03
              </h3>
              <p>
                <strong>Inscription définitive</strong> (si test réussi)
              </p>
            </div>
          </div>
  
          <div className="mt-10 flex flex-col md:flex-row justify-center gap-4">
            <button className="bg-white text-blue-600 font-bold py-2 px-6 rounded hover:bg-gray-100 transition">
              Inscrivez-vous ici
            </button>
            <button className="bg-blue-900 text-white font-bold py-2 px-6 rounded hover:bg-blue-800 transition">
              Résultat concours
            </button>
          </div>
        </div>
      </div>
    );
  }
export default AdmissionSection;
  
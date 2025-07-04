function Section(titre,texte,images) {
    return (
        <section className="bg-gray-50 py-10 px-4">
        <div className="max-w-6xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-[#002147] mb-4">
            {titre}
          </h2>
          <p className="text-[#002147] max-w-3xl mx-auto mb-10">
            {texte}
          </p>
  
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8  justify-items-center">
            {images.map((images) => (
              <div className="flex flex-col items-center">
                <img
                  src={images}
                  className="w-28 h-28 object-contain mb-2"
                />
              </div>
            ))}
          </div>
        </div>
      </section>
    )
}
export default Section
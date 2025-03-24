interface HeroSectionProps {
  sectionNumber: number
  sectionId: string
}

export default function HeroSection({ sectionNumber, sectionId }: HeroSectionProps) {
  return (
    <section id={sectionId} className="min-h-screen max-md:h-[300px] flex flex-col justify-center items-center relative">
      <div className="px-4">
        <h2 className="text-xl text-gray-400 mb-2"><span className="text-yellow-300">SALUT</span> JE SUIS</h2>
        <div className="relative">
          <h1 className="max-sm:text-5xl max-md:text-6xl md:text-9xl font-bold tracking-wider text-gray-200">MAQSOUD</h1>
          <div className="h-1 w-full max-md:w-[100px] md:w-[500px] bg-yellow-300 absolute -top-6 right-0"></div>
        </div>
        <h3 className="text-yellow-300 text-end text-lg md:text-xl mt-4 tracking-wide">UN DEVELOPPEUR FRONTEND</h3>
      </div>

      {/* Page Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 text-3xl text-gray-500">
        {sectionNumber.toString().padStart(2, "0")}
      </div>
    </section>
  )
}


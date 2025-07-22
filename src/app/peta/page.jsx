import Image from "next/image";
export default function Peta() {
  return (
    <div className="min-h-screen pb-[20vw] relative">
      <Image
        src="/images/peta/kainmerah.png"
        alt="Kain Merah"
        width={1920}
        height={1080}
        className="w-[40vw] h-[20vw] object-cover translate-y-[-5vw] absolute z-10"
      />
      <Image
        src="/images/peta/tugtekbg.png"
        alt="Tugu Teknik UGM"
        width={1000}
        height={1000}
        className="w-[20vw] h-[30vw] object-cover absolute right-35 translate-y-[10vw] z-[10]"
      />
      <Image
        src="/images/peta/dekorasikuning.png"
        alt="Dekorasi Kuning"
        width={1000}
        height={1000}
        className="w-[28%] h-[50%] object-cover translate-y-[-8vw] absolute top-0 right-0 z-[11]"
      />
      <Image
        src="/images/peta/dekorasimerah.png"
        alt="Dekorasi Merah"
        width={1000}
        height={1000}
        className="w-[20%] h-[32%] object-cover translate-y-[-7vw] translate-x-[0vw] absolute top-0 right-0 z-[12]"
      />
      <div className="container mx-auto px-4 py-24 mt-12">
        {/* Desktop: Text on right, Mobile/Tablet: Text above */}
        <div className="flex flex-col lg:flex-row items-center justify-center gap-8 mx-[10vw] my-[3vw] lg:gap-12">
          {/* Map container - scaled proportionally for each breakpoint */}
          <div className="w-full lg:w-2/3 max-w-4xl relative z-50">
            <div className="relative aspect-[16/9]">
              <iframe
                className="w-full h-full rounded-lg shadow-lg border-none relative z-[100]"
                src="https://ft-digitaltwin3d.id/"
                frameBorder="0"
                allowFullScreen
              ></iframe>
              {/* 3D red border effect with color #A01326 */}
              <div className="absolute inset-0 rounded-lg z-50">
                {/* Main border with 3D effect */}
                <div
                  className="absolute inset-0 border-4 rounded-lg transform translate-x-1 translate-y-1 z-40"
                  style={{ borderColor: "#A01326", opacity: 0.8 }}
                ></div>
                <div
                  className="absolute inset-0 border-4 rounded-lg transform translate-x-0.5 translate-y-0.5 z-30"
                  style={{ borderColor: "#A01326", opacity: 0.9 }}
                ></div>
                <div
                  className="absolute inset-0 border-4 rounded-lg shadow-2xl z-20"
                  style={{ borderColor: "#A01326" }}
                ></div>
              </div>
            </div>
          </div>

          {/* Text container - positioned right on desktop, above on mobile/tablet */}
          <div className="w-full lg:w-1/3 lg:pl-8 relative z-10">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-storybook text-[#013047] text-center lg:text-right">
              3D Maps Fakultas Teknik
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
}

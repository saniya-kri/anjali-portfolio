import Image from "next/image";
import { FaLink } from "react-icons/fa6";

const Fullstack = () => {
  return (
      <div className="w-11/12 mt-10 mx-auto">
      <div className="mt-10 text-[#cccccc] text-2xl sm:text-4xl py-4 text-center p-2 mb-10 font-cursive font-bold">Frontend Projects</div>
        <div className=" w-full flex flex-wrap justify-center gap-10 items-center">
        
          <div>
          <div className="product-group group p-[1px] flex items-center justify-center relative select-none">
              <div className="absolute top-5 right-5 bg-red-500 p-0.5 px-2 rounded-[2px] text-xs z-30 shadow-lg">
                DEMO
              </div>
              <div className="relative z-20 group p-[10px] glassmorph rounded-lg z-1 border border-gray-700 bg-zinc text-white">
                <div className="relative h-[200px] w-[300px] flex flex-row items-center justify-center rounded-md overflow-hidden border border-gray-700 img-area">
                  <Image
                    alt="image1"
                    draggable="false"
                    loading="lazy"
                    width="300"
                    height="200"
                    decoding="async"
                    className="image_one text-transparent"
                    src="/assets/images/ad.png"
                  />

                  <Image
                    alt="image2"
                    draggable="false"
                    loading="lazy"
                    width="300"
                    height="200"
                    decoding="async"
                    className="image_two text-transparent"
                    src="/assets/images/ae.png"
                  />
                </div>
                <div className="pt-[10px] rounded-b-lg p-5">
                    <div className="text-[10px] text-[#9a9a9b]">
                      Clone Website of Prog.com
                    </div>
                    <div className="w-full flex flex-row items-center justify-between">
                      <div className="text-1xl font-medium">Prog</div>
                      <div  className="text-[12px] flex items-center bg-blue-500 text-white font-semibold bg-blue px-4 py-1 rounded-sm" >
                        <FaLink className="mx-2"/>
                        <a href="https://prog-pro.vercel.app/" className="cursor-pointer">Link</a>
                    </div>
                    </div>
                  </div>
              </div>
            </div>
          </div>

          <div className="product-group group p-[1px] flex items-center justify-center relative select-none">
              <div className="absolute top-5 right-5 bg-red-500 p-0.5 px-2 rounded-[2px] text-xs z-30 shadow-lg">
                DEMO
              </div>
              <div className="relative z-20 group p-[10px] glassmorph rounded-lg z-1 border border-gray-700 bg-zinc text-white">
                <div className="relative h-[200px] w-[300px] flex flex-row items-center justify-center rounded-md overflow-hidden border border-gray-700 img-area">
                  <Image
                    alt="image1"
                    draggable="false"
                    loading="lazy"
                    width="300"
                    height="200"
                    decoding="async"
                    className="image_one text-transparent"
                    src="/assets/images/ac.jpg"
                  />

                  <Image
                    alt="image2"
                    draggable="false"
                    loading="lazy"
                    width="300"
                    height="200"
                    decoding="async"
                    className="image_two text-transparent"
                    src="/assets/images/ab.png"
                  />
                </div>
                <div className="pt-[10px] rounded-b-lg p-5">
                    <div className="text-[10px] text-[#9a9a9b]">
                      Clone Website of Brainbave.com
                    </div>
                    <div className="w-full flex flex-row items-center justify-between">
                      <div className="text-1xl font-medium">Brainbave</div>
                      <div  className="text-[12px] flex items-center bg-blue-500 text-white font-semibold bg-blue px-4 py-1 rounded-sm" >
                        <FaLink className="mx-2"/>
                        <a href="https://saniya-kri.github.io/BranewaveTwo/" className="cursor-pointer">Link</a>
                    </div>
                    </div>
                  </div>
              </div>
            </div>

            <div className="product-group group p-[1px] flex items-center justify-center relative select-none">
              <div className="absolute top-5 right-5 bg-red-500 p-0.5 px-2 rounded-[2px] text-xs z-30 shadow-lg">
                DEMO
              </div>
              <div className="relative z-20 group p-[10px] glassmorph rounded-lg z-1 border border-gray-700 bg-zinc text-white">
                <div className="relative h-[200px] w-[300px] flex flex-row items-center justify-center rounded-md overflow-hidden border border-gray-700 img-area">
                  <Image
                    alt="image1"
                    draggable="false"
                    loading="lazy"
                    width="300"
                    height="200"
                    decoding="async"
                    className="image_one text-transparent"
                    src="/assets/images/chip.jpeg"
                  />

                  <Image
                    alt="image2"
                    draggable="false"
                    loading="lazy"
                    width="300"
                    height="200"
                    decoding="async"
                    className="image_two text-transparent"
                    src="/assets/images/chip4.png"
                  />
                </div>
                <div className="pt-[10px] rounded-b-lg p-5">
                    <div className="text-[10px] text-[#9a9a9b]">
                      Clone Website of Iphone.com
                    </div>
                    <div className="w-full flex flex-row items-center justify-between">
                      <div className="text-1xl font-medium">I Phone</div>
                      <div  className="text-[12px] flex items-center bg-blue-500 text-white font-semibold bg-blue px-4 py-1 rounded-sm" >
                        <FaLink className="mx-2"/>
                        <a href="https://iphone-wheat-chi.vercel.app/" className="cursor-pointer">Link</a>
                    </div>
                    </div>
                  </div>
              </div>
            </div>

         <div className="product-group group p-[1px] flex items-center justify-center relative select-none">
              <div className="absolute top-5 right-5 bg-red-500 p-0.5 px-2 rounded-[2px] text-xs z-30 shadow-lg">
                DEMO
              </div>
              <div className="relative z-20 group p-[10px] glassmorph rounded-lg z-1 border border-gray-700 bg-zinc text-white">
                <div className="relative h-[200px] w-[300px] flex flex-row items-center justify-center rounded-md overflow-hidden border border-gray-700 img-area">
                  <Image
                    alt="image1"
                    draggable="false"
                    loading="lazy"
                    width="300"
                    height="200"
                    decoding="async"
                    className="image_one text-transparent"
                    src="/assets/images/price.png"
                  />

                  <Image
                    alt="image2"
                    draggable="false"
                    loading="lazy"
                    width="300"
                    height="200"
                    decoding="async"
                    className="image_two text-transparent"
                    src="/assets/images/price2.png"
                  />
                </div>
                <div className="pt-[10px] rounded-b-lg p-5">
                    <div className="text-[10px] text-[#9a9a9b]">
                      Clone Website of pricing
                    </div>
                    <div className="w-full flex flex-row items-center justify-between">
                      <div className="text-1xl font-medium">Pricing-section</div>
                      <div  className="text-[12px] flex items-center bg-blue-500 text-white font-semibold bg-blue px-4 py-1 rounded-sm" >
                        <FaLink className="mx-2"/>
                        <a href="https://sven-react-app.netlify.app/" className="cursor-pointer">Link</a>
                    </div>
                    </div>
                  </div>
              </div>
            </div>

            <div className="product-group group p-[1px] flex items-center justify-center relative select-none">
              <div className="absolute top-5 right-5 bg-red-500 p-0.5 px-2 rounded-[2px] text-xs z-30 shadow-lg">
                DEMO
              </div>
              <div className="relative z-20 group p-[10px] glassmorph rounded-lg z-1 border border-gray-700 bg-zinc text-white">
                <div className="relative h-[200px] w-[300px] flex flex-row items-center justify-center rounded-md overflow-hidden border border-gray-700 img-area">
                  <Image
                    alt="image1"
                    draggable="false"
                    loading="lazy"
                    width="300"
                    height="200"
                    decoding="async"
                    className="image_one text-transparent"
                    src="/assets/images/af.png"
                  />

                  <Image
                    alt="image2"
                    draggable="false"
                    loading="lazy"
                    width="300"
                    height="200"
                    decoding="async"
                    className="image_two text-transparent"
                    src="/assets/images/asset 31.png"
                  />
                </div>
                <div className="pt-[10px] rounded-b-lg p-5">
                    <div className="text-[10px] text-[#9a9a9b]">
                      Clone Website of Legion.com
                    </div>
                    <div className="w-full flex flex-row items-center justify-between">
                      <div className="text-1xl font-medium">Legion</div>
                      <div  className="text-[12px] flex items-center bg-blue-500 text-white font-semibold bg-blue px-4 py-1 rounded-sm" >
                        <FaLink className="mx-2"/>
                        <a href="https://saniya-kri.github.io/portfolioLeg/" className="cursor-pointer">Link</a>
                    </div>
                    </div>
                  </div>
              </div>
            </div>

            <div className="product-group group p-[1px] flex items-center justify-center relative select-none">
              <div className="absolute top-5 right-5 bg-red-500 p-0.5 px-2 rounded-[2px] text-xs z-30 shadow-lg">
                DEMO
              </div>
              <div className="relative z-20 group p-[10px] glassmorph rounded-lg z-1 border border-gray-700 bg-zinc text-white">
                <div className="relative h-[200px] w-[300px] flex flex-row items-center justify-center rounded-md overflow-hidden border border-gray-700 img-area">
                  <Image
                    alt="image1"
                    draggable="false"
                    loading="lazy"
                    width="300"
                    height="200"
                    decoding="async"
                    className="image_one text-transparent"
                    src="/assets/images/hook.png"
                  />

                  <Image
                    alt="image2"
                    draggable="false"
                    loading="lazy"
                    width="300"
                    height="200"
                    decoding="async"
                    className="image_two text-transparent"
                    src="/assets/images/bank.png"
                  />
                </div>
                <div className="pt-[10px] rounded-b-lg p-5">
                    <div className="text-[10px] text-[#9a9a9b]">
                      Clone Website of HookBank.com
                    </div>
                    <div className="w-full flex flex-row items-center justify-between">
                      <div className="text-1xl font-medium">HookBank</div>
                      <div  className="text-[12px] flex items-center bg-blue-500 text-white font-semibold bg-blue px-4 py-1 rounded-sm" >
                        <FaLink className="mx-2"/>
                        <a href="https://hook-bank-kohl.vercel.app/" className="cursor-pointer">Link</a>
                    </div>
                    </div>
                  </div>
              </div>
            </div>

            <div className="product-group group p-[1px] flex items-center justify-center relative select-none">
              <div className="absolute top-5 right-5 bg-red-500 p-0.5 px-2 rounded-[2px] text-xs z-30 shadow-lg">
                DEMO
              </div>
              <div className="relative z-20 group p-[10px] glassmorph rounded-lg z-1 border border-gray-700 bg-zinc text-white">
                <div className="relative h-[200px] w-[300px] flex flex-row items-center justify-center rounded-md overflow-hidden border border-gray-700 img-area">
                  <Image
                    alt="image1"
                    draggable="false"
                    loading="lazy"
                    width="300"
                    height="200"
                    decoding="async"
                    className="image_one text-transparent"
                    src="/assets/images/kavin.jpg"
                  />

                  <Image
                    alt="image2"
                    draggable="false"
                    loading="lazy"
                    width="300"
                    height="200"
                    decoding="async"
                    className="image_two text-transparent"
                    src="/assets/images/rush.jpg"
                  />
                </div>
                <div className="pt-[10px] rounded-b-lg p-5">
                    <div className="text-[10px] text-[#9a9a9b]">
                      Clone Portfolio of Kavin Rush.com
                    </div>
                    <div className="w-full flex flex-row items-center justify-between">
                      <div className="text-1xl font-medium">Kavin Rush</div>
                      <div  className="text-[12px] flex items-center bg-blue-500 text-white font-semibold bg-blue px-4 py-1 rounded-sm" >
                        <FaLink className="mx-2"/>
                        <a href="https://saniya-kri.github.io/first-app/" className="cursor-pointer">Link</a>
                    </div>
                    </div>
                  </div>
              </div>
            </div>

            <div className="product-group group p-[1px] flex items-center justify-center relative select-none">
              <div className="absolute top-5 right-5 bg-red-500 p-0.5 px-2 rounded-[2px] text-xs z-30 shadow-lg">
                DEMO
              </div>
              <div className="relative z-20 group p-[10px] glassmorph rounded-lg z-1 border border-gray-700 bg-zinc text-white">
                <div className="relative h-[200px] w-[300px] flex flex-row items-center justify-center rounded-md overflow-hidden border border-gray-700 img-area">
                  <Image
                    alt="image1"
                    draggable="false"
                    loading="lazy"
                    width="300"
                    height="200"
                    decoding="async"
                    className="image_one text-transparent"
                    src="/assets/images/fron.jpeg"
                  />

                  <Image
                    alt="image2"
                    draggable="false"
                    loading="lazy"
                    width="300"
                    height="200"
                    decoding="async"
                    className="image_two text-transparent"
                    src="/assets/images/essy.jpeg"
                  />
                </div>
                <div className="pt-[10px] rounded-b-lg p-5">
                    <div className="text-[10px] text-[#9a9a9b]">
                      Clone Portfolio of esy frontend.com
                    </div>
                    <div className="w-full flex flex-row items-center justify-between">
                      <div className="text-1xl font-medium">Esy Frontend</div>
                      <div  className="text-[12px] flex items-center bg-blue-500 text-white font-semibold bg-blue px-4 py-1 rounded-sm" >
                        <FaLink className="mx-2"/>
                        <a href="https://hrx-react-app.netlify.app/" className="cursor-pointer">Link</a>
                    </div>
                    </div>
                  </div>
              </div>
            </div>

            <div className="product-group group p-[1px] flex items-center justify-center relative select-none">
              <div className="absolute top-5 right-5 bg-red-500 p-0.5 px-2 rounded-[2px] text-xs z-30 shadow-lg">
                DEMO
              </div>
              <div className="relative z-20 group p-[10px] glassmorph rounded-lg z-1 border border-gray-700 bg-zinc text-white">
                <div className="relative h-[200px] w-[300px] flex flex-row items-center justify-center rounded-md overflow-hidden border border-gray-700 img-area">
                  <Image
                    alt="image1"
                    draggable="false"
                    loading="lazy"
                    width="300"
                    height="200"
                    decoding="async"
                    className="image_one text-transparent"
                    src="/assets/images/virtual.jpg"
                  />

                  <Image
                    alt="image2"
                    draggable="false"
                    loading="lazy"
                    width="300"
                    height="200"
                    decoding="async"
                    className="image_two text-transparent"
                    src="/assets/images/R.jpg"
                  />
                </div>
                <div className="pt-[10px] rounded-b-lg p-5">
                    <div className="text-[10px] text-[#9a9a9b]">
                      Clone Portfolio of esy virtual R.com
                    </div>
                    <div className="w-full flex flex-row items-center justify-between">
                      <div className="text-1xl font-medium">Virtual R</div>
                      <div  className="text-[12px] flex items-center bg-blue-500 text-white font-semibold bg-blue px-4 py-1 rounded-sm" >
                        <FaLink className="mx-2"/>
                        <a href="https://saniya-kri.github.io/third-app/" className="cursor-pointer">Link</a>
                    </div>
                    </div>
                  </div>
              </div>
            </div>

            <div className="product-group group p-[1px] flex items-center justify-center relative select-none">
              <div className="absolute top-5 right-5 bg-red-500 p-0.5 px-2 rounded-[2px] text-xs z-30 shadow-lg">
                DEMO
              </div>
              <div className="relative z-20 group p-[10px] glassmorph rounded-lg z-1 border border-gray-700 bg-zinc text-white">
                <div className="relative h-[200px] w-[300px] flex flex-row items-center justify-center rounded-md overflow-hidden border border-gray-700 img-area">
                  <Image
                    alt="image1"
                    draggable="false"
                    loading="lazy"
                    width="300"
                    height="200"
                    decoding="async"
                    className="image_one text-transparent"
                    src="/assets/images/scrol.png"
                  />

                  <Image
                    alt="image2"
                    draggable="false"
                    loading="lazy"
                    width="300"
                    height="200"
                    decoding="async"
                    className="image_two text-transparent"
                    src="/assets/images/bg.png"
                  />
                </div>
                <div className="pt-[10px] rounded-b-lg p-5">
                    <div className="text-[10px] text-[#9a9a9b]">
                      Clone Portfolio of esy Scroll-Bg.com
                    </div>
                    <div className="w-full flex flex-row items-center justify-between">
                      <div className="text-1xl font-medium">Scroll Bg</div>
                      <div  className="text-[12px] flex items-center bg-blue-500 text-white font-semibold bg-blue px-4 py-1 rounded-sm" >
                        <FaLink className="mx-2"/>
                        <a href="https://scroll-bg.netlify.app/" className="cursor-pointer">Link</a>
                    </div>
                    </div>
                  </div>
              </div>
            </div>

       
        
          
        </div>
      </div>

  );
};

export default Fullstack;
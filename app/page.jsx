import Image from "next/image";

export default function Home() {
  return (
    <>
      <nav className="py-6 px-16 fixed z-20 top-0 left-0 w-full flex justify-between bg-black animate-fade-down animate-once animate-duration-1000 animate-delay-500 animate-ease-in">
        <Image
          className="object-contain"
          src={"/assets/images/logo.webp"}
          width={1030 / 6}
          height={78 / 6}
          alt="Logo Codesight"
        />
        <ul className="flex items-center gap-8 text-white">
          <li>Home</li>
          <li>Stack</li>
          <li>Quienes somos</li>
          <li>Contacto</li>
        </ul>
      </nav>
      <main className="relative">
        <header className="min-h-screen relative flex flex-col gap-4 justify-center items-center bg-black overflow-hidden">
          <div className="w-36 h-36 absolute top-[100px] left-16 rounded-full bg-gradient-to-b from-cyan-400 to-purple-500 z-10 blur-[100px] animate-fade animate-once animate-duration-1000 animate-delay-[1500ms]"></div>
          <div className="w-[320px] h-[320px] absolute top-1/2 -translate-y-1/2 translate-x-[66%] right-0 rounded-full bg-gradient-to-b from-cyan-400 to-purple-500 z-10 blur-[100px] animate-fade animate-once animate-duration-1000 animate-delay-[1500ms]"></div>
          <div className="mb-48 flex justify-center items-center flex-col z-10">
            <Image
              className="object-contain animate-fade-down animate-once animate-duration-1000 animate-delay-500 animate-ease-in"
              src={"/assets/images/logo.webp"}
              width={1030 / 2}
              height={78 / 2}
              alt="Logo Codesight"
              priority
            />
            <p className="mt-8 text-2xl text-gray-100 text-center animate-fade animate-once animate-duration-1000 animate-delay-[1300ms] animate-ease-in">
              Construyendo el futuro digital, juntos.
            </p>
          </div>
          <Image
            className="absolute bottom-0 object-contain animate-fade-up animate-once animate-duration-1000 animate-delay-500 animate-ease-in"
            src={"/assets/images/wave.webp"}
            width={3458 / 2}
            height={1270 / 2}
            alt="Ilustración Olas futuristas"
            priority
          />
        </header>

        <section className="pt-28 pb-60 text-center overflow-hidden relative">
          <h1 className="mb-8 text-3xl tracking-[20px]">EXPERTOS DIGITALES</h1>
          <p className="max-w-[600px] mx-auto text-gray-800">
            Nos dedicamos a ofrecer soluciones digitales innovadoras y de alta
            calidad. Nuestra misión es impulsar el éxito en línea de nuestros
            clientes, desarrollando sitios y.
          </p>
          <Image
            className="absolute bottom-0 translate-y-[75%] left-1/2 -translate-x-[60%]"
            src={"/assets/images/wave-about.webp"}
            width={948 / 1.5}
            height={1021 / 1.5}
            alt="figura"
          />
          <div
            style={{ clipPath: "ellipse(50% 50% at 50% 50%)" }}
            className="w-[60vw] h-[200px] absolute bottom-0 left-1/2 translate-y-[70%] -translate-x-1/2 bg-black rounded-full"
          ></div>
        </section>

        <section className="pt-14 pb-44 bg-black text-white text-center relative">
          <Image
            className="absolute top-0 right-0 object-contain"
            src={"/assets/images/wave-top-services.webp"}
            width={536 / 2}
            height={904 / 2}
            alt="figura"
          />

          <Image
            className="absolute bottom-16 left-16 object-contain"
            src={"/assets/images/wave-bottom-services.webp"}
            width={209 / 2}
            height={165 / 2}
            alt="figura"
          />
          <h2 className="mb-24 text-4xl tracking-[20px] leading-relaxed">
            NUESTROS <br /> SERVICIOS
          </h2>
          <div className="grid grid-cols-2 justify-center gap-24 max-w-screen-lg mx-auto relative">
            <div className="h-[1px] w-[66%] absolute top-1/2 left-1/2 -translate-x-1/2 bg-neutral-800"></div>
            <div className="h-[1px] w-[25%] absolute top-1/2 left-1/2 -translate-x-1/2 rotate-90 bg-neutral-800"></div>
            <div className="flex flex-col gap-4 items-center">
              <Image
                className="mb-[26px] object-contain"
                src={"/assets/images/programming-icon.png"}
                width={134 / 2}
                height={134 / 2}
                alt="icono desarrollo web"
              />
              <h3 className="text-2xl">Desarrollo de sitios web</h3>
              <p className="max-w-[300px] text-gray-400">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit
              </p>
            </div>
            <div className="flex flex-col gap-4 items-center">
              <Image
                className="mb-4 object-contain"
                src={"/assets/images/api-icon.png"}
                width={134 / 2}
                height={134 / 2}
                alt="icono desarrollo web"
              />
              <h3 className="text-2xl">Desarrollo de aplicaciones</h3>
              <p className="max-w-[300px] text-gray-400">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit
              </p>
            </div>
            <div className="flex flex-col gap-4 items-center">
              <Image
                className="mb-4 object-contain"
                src={"/assets/images/design-icon.png"}
                width={134 / 2}
                height={134 / 2}
                alt="icono desarrollo web"
              />
              <h3 className="text-2xl">Diseño UX/UI personalizado</h3>
              <p className="max-w-[300px] text-gray-400">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit
              </p>
            </div>
            <div className="flex flex-col gap-4 items-center">
              <Image
                className="mb-4 object-contain"
                src={"/assets/images/multimedia-icon.png"}
                width={134 / 2}
                height={134 / 2}
                alt="icono desarrollo web"
              />
              <h3 className="text-2xl">Soluciones de branding y multimedia</h3>
              <p className="max-w-[300px] text-gray-400">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit
              </p>
            </div>
          </div>
        </section>

        <section
          className="relative overflow-hidden grid grid-cols-[1fr_1fr] bg-[linear-gradient(to_right,rgba(0,0,0,0.15),rgba(0,0,0,0.15)),url('/assets/images/bg-fixed.webp')]
 bg-no-repeat bg-cover bg-fixed"
        >
          <div className="flex justify-center relative">
            <Image
              className="drop-shadow-xl relative z-10 translate-y-[10%]"
              // className="drop-shadow-[0px_0px_5px_#4deeea]"
              src={"/assets/images/person.webp"}
              width={1372 / 2.6}
              height={1974 / 2.6}
              alt="imagen persona usando visores de realidad virtual"
            />
            <div
              style={{
                clipPath: "polygon(0% 15%, 100% -40%, 100% 180%, 0% 5%)",
              }}
              className="absolute top-[20%] left-0 h-full w-[100vw] -rotate-[0deg] translate-x-1/4 bg-white blur-[50px] bg-opacity-75"
            ></div>
          </div>
          <div className="py-16 px-12 self-center max-w-[600px] mx-auto text-neutral-950 font-normal text-lg text-center relative">
            {/* <div
              style={{
                clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 25%)",
              }}
              className="absolute top-0 right-0 h-full w-[90vw] -rotate-[0deg] translate-x-1/4 bg-white blur-[50px] bg-opacity-75"
            ></div> */}
            <Image
              className="mb-8 relative"
              src={"/assets/images/logo-black.webp"}
              width={952 / 2}
              height={72 / 2}
              alt="imagen persona usando visores de realidad virtual"
            />
            <p className="mb-4 relative">
              Enfrenta el futuro con los ojos abiertos. Miramos más allá del
              horizonte digital para anticipar y adaptarnos a las evoluciones
              tecnológicas.
            </p>
            <p className="relative">
              Nuestra pasión por la innovación y la excelencia técnica nos
              convierte en tu aliado ideal para conquistar desafíos digitales y
              transformarlos en oportunidades de éxito.
            </p>
          </div>
        </section>

        <section className="bg-black overflow-hidden relative">
          <Image
            className="absolute top-[40px] right-[47%] object-contain"
            src={"/assets/images/wave-codesight-start.webp"}
            width={233 / 2}
            height={202 / 2}
            alt="figura"
          />
          <Image
            className="absolute top-1 right-[20%] object-contain"
            src={"/assets/images/wave-codesight-middle.webp"}
            width={800 / 2.5}
            height={514 / 2.5}
            alt="figura"
          />
          <Image
            className="absolute top-0 right-0 object-contain"
            src={"/assets/images/wave-codesight-end.webp"}
            width={528 / 2}
            height={1009 / 2}
            alt="figura"
          />
          <div className="max-w-screen-xl py-28 px-8 mx-auto z-10">
            <div className="mb-28 flex gap-4 justify-between">
              <Image
                className="object-contain"
                src={"/assets/images/logo.webp"}
                width={1030 / 3}
                height={78 / 3}
                alt="Logo Codesight"
              />
              {/* <div className="py-4 px-10 relative text-white text-4xl border border-cyan-600 rounded-2xl">
                <p>Frase + datos duros</p>
                <div className="h-[1px] w-[50vw] absolute top-1/2 right-0 translate-x-full bg-cyan-600"></div>
              </div> */}
            </div>

            <div className="grid grid-cols-3 gap-16 text-gray-300 text-base leading-8 relative">
              <p className="">
                <span className="font-bold text-white">
                  Enfoque Sostenible:{" "}
                </span>
                Nos comprometemos con el desarrollo sostenible, aplicando
                prácticas que minimizan nuestro impacto ambiental y promoviendo
                proyectos que tienen un efecto positivo en la sociedad.
              </p>
              <p>
                <span className="font-bold text-white">
                  Capacitación Continua:{" "}
                </span>
                Creemos en el crecimiento continuo y la educación, por lo que
                invertimos en la capacitación y el desarrollo profesional de
                nuestro equipo, asegurando que estén al tanto de las últimas
                tendencias y tecnologías.
              </p>
              <p>
                <span className="font-bold text-white">
                  Innovación y Creatividad:{" "}
                </span>
                La innovación está en el corazón de todo lo que hacemos. Nos
                esforzamos por pensar fuera de la caja para encontrar soluciones
                creativas que superen las expectativas de nuestros clientes.
              </p>
            </div>
          </div>
        </section>

        <section className="py-24">
          <h3 className="mb-16 text-3xl text-center">Stack Tecnológico</h3>
          <div className="flex items-center justify-around">
            <Image
              src={"/assets/images/react.png"}
              width={176}
              height={61}
              alt="logo react js"
            />
            <Image
              src={"/assets/images/next.png"}
              width={167}
              height={100}
              alt="logo next js"
            />
            <Image
              src={"/assets/images/vue.png"}
              width={166}
              height={83}
              alt="logo vue js"
            />
            <Image
              src={"/assets/images/express.png"}
              width={239}
              height={86}
              alt="logo express"
            />
            <Image
              src={"/assets/images/laravel.png"}
              width={222}
              height={71}
              alt="logo laravel"
            />
            <Image
              src={"/assets/images/netcore.png"}
              width={86}
              height={86}
              alt="logo .net core"
            />
          </div>
        </section>

        <section className="p-16 relative grid grid-cols-2 overflow-hidden gap-8 bg-[url(/assets/images/bg-form.webp)] bg-cover bg-no-repeat bg-center">
          <video className="absolute top-0 left-0 w-full" loop muted autoPlay>
            <source src="/assets/videos/video-form.webm" type="video/mp4" />
          </video>
          <div className="flex z-10 justify-center flex-col gap-2 items-center text-white text-5xl text-pretty font-bold">
            <div className="max-w-[600px]">
              <h3 className="text-start leading-snug">
                ¿Tienes un proyecto? Nos encantaría ayudarte.
              </h3>
            </div>
          </div>
          <form className="p-16 z-10 max-w-[600px] flex flex-col gap-4 mx-auto bg-black rounded-2xl">
            <p className="text-gray-200">Estoy interesado en...</p>
            <div className="flex flex-wrap gap-4 text-gray-400">
              <button className="py-2 px-4 border border-gray-400 rounded-lg transition-all duration-300 hover:text-white hover:border-white">
                Desarrollo web
              </button>
              <button className="py-2 px-4 border border-gray-400 rounded-lg transition-all duration-300 hover:text-white hover:border-white">
                Desarrollo aplicación
              </button>
              <button className="py-2 px-4 border border-gray-400 rounded-lg transition-all duration-300 hover:text-white hover:border-white">
                Diseño UX/UI
              </button>
              <button className="py-2 px-4 border border-gray-400 rounded-lg transition-all duration-300 hover:text-white hover:border-white">
                Branding / Multimedia
              </button>
              <button className="py-2 px-4 border border-gray-400 rounded-lg transition-all duration-300 hover:text-white hover:border-white">
                Otros
              </button>
            </div>
            <div className="mt-8 flex flex-col gap-8">
              <input
                className="px-1 py-2 bg-black border-b border-gray-400 text-white focus:outline-none focus:border-cyan-400 transition-all duration-300"
                placeholder="Nombre"
                type="text"
                name="name"
              />
              <input
                className="px-1 py-2 bg-black border-b border-gray-400 text-white focus:outline-none focus:border-cyan-400 transition-all duration-300"
                placeholder="Email"
                type="email"
                name="email"
              />
              <textarea
                placeholder="Cuéntanos de tu proyecto"
                className="px-1 py-2 bg-black border-b border-gray-400 text-white focus:outline-none focus:border-cyan-400 transition-all duration-300"
                name="propuesta"
                id=""
                cols="30"
                rows="6"
              ></textarea>
              <button className="py-2 px-4 max-w-fit bg-gray-50 rounded-lg text-black font-bold transition-all duration-300 hover:bg-cyan-400 hover:text-white">
                Enviar mensaje
              </button>
            </div>
          </form>
        </section>
      </main>
      <footer className="py-8 px-16 w-full flex justify-center bg-black">
        <Image
          className="object-contain"
          src={"/assets/images/logo.webp"}
          width={1030 / 6}
          height={78 / 6}
          alt="Logo Codesight"
        />
      </footer>
    </>
  );
}

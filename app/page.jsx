import Image from "next/image";
import ServicesTopFigure from "./components/ServicesTopFigure";
import ServicesBottomFigure from "./components/ServicesBottomFigure";
import AboutUsFigure from "./components/AboutUsFigure";
import CodesightFigureEnd from "./components/CodesightFigureEnd";
import CodesightFigureMiddle from "./components/CodesightFigureMiddle";
import CodesightFigureStart from "./components/CodesightFigureStart";
import Brightness from "./components/Brightness";
import TechMarquee from "./components/TechMarquee";
import Form from "./components/Form";

export default function Home() {
  return (
    <>
      <main className="relative">
        <header
          id="home"
          className="min-h-screen relative flex flex-col gap-4 justify-center items-center bg-black overflow-hidden"
        >
          <div className="w-36 h-36 absolute top-[100px] md:left-16 left-4 rounded-full bg-gradient-to-b from-cyan-400 to-purple-500 z-10 blur-[100px] animate-fade animate-once animate-duration-1000 animate-delay-[1500ms]"></div>
          <div className="w-[320px] h-[320px] absolute top-1/2 -translate-y-1/2 translate-x-[66%] right-0 rounded-full bg-gradient-to-b from-cyan-400 to-purple-500 z-10 blur-[100px] animate-fade animate-once animate-duration-1000 animate-delay-[1500ms]"></div>
          <div className="mb-48 p-8 flex justify-center items-center flex-col z-10">
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
            className="absolute hidden sm:block bottom-0 object-contain animate-fade-up animate-once animate-duration-1000 animate-delay-500 animate-ease-in"
            src={"/assets/images/wave.webp"}
            width={1726}
            height={635}
            alt="Ilustración olas futuristas"
            priority
          />
          <Image
            className="absolute sm:hidden bottom-0 object-contain animate-fade-up animate-once animate-duration-1000 animate-delay-500 animate-ease-in"
            src={"/assets/images/wave-mobile.webp"}
            width={1726}
            height={635}
            alt="Ilustración olas futuristas"
            priority
          />
        </header>

        {/* About */}
        <section
          id="quienes-somos"
          className="pt-24 pb-32 lg:pb-60 text-center overflow-hidden relative"
        >
          <h1 className="mb-8 text-3xl tracking-[20px]">EXPERTOS DIGITALES</h1>
          <p className="max-w-[600px] mx-auto text-gray-800">
            Nos dedicamos a ofrecer soluciones digitales innovadoras y de alta
            calidad. Nuestra misión es impulsar el éxito en línea de nuestros
            clientes, desarrollando sitios y.
          </p>
          <AboutUsFigure />
          <div
            style={{ clipPath: "ellipse(50% 50% at 50% 50%)" }}
            className="hidden lg:block w-[60vw] h-[200px] absolute bottom-0 left-1/2 translate-y-[70%] -translate-x-1/2 bg-black rounded-full"
          ></div>
        </section>

        {/* Services */}
        <section
          id="servicios"
          className="pt-14 pb-40 bg-black text-white text-center relative overflow-hidden"
        >
          <ServicesTopFigure />
          <ServicesBottomFigure />
          <h2 className="mb-24 text-3xl lg:text-4xl tracking-[20px] leading-relaxed relative z-10">
            NUESTROS <br /> SERVICIOS
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 justify-center gap-24 max-w-screen-lg mx-auto relative">
            <div className="hidden lg:block h-[1px] w-[66%] absolute top-1/2 left-1/2 -translate-x-1/2 bg-neutral-800"></div>
            <div className="hidden lg:block h-[1px] w-[25%] absolute top-1/2 left-1/2 -translate-x-1/2 rotate-90 bg-neutral-800"></div>
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
          id="objetivo"
          className="py-4 relative overflow-hidden grid grid-cols-1 lg:grid-cols-[1fr_1fr] bg-[linear-gradient(to_bottom,rgba(0,0,0,0.3),rgba(0,0,0,0.3)),url('/assets/images/bg-fixed.webp')] lg:bg-[linear-gradient(to_right,rgba(0,0,0,0.15),rgba(0,0,0,0.15)),url('/assets/images/bg-fixed.webp')]
 bg-no-repeat bg-cover bg-fixed bg-center"
        >
          {/* Brillo */}
          <Brightness />
          <div className="flex justify-center items-center relative max-h-[80vh]">
            <Image
              className="hidden lg:block drop-shadow-xl relative z-10 object-contain w-[650px] translate-y-[10%]"
              src={"/assets/images/person.webp"}
              width={1372 * 2}
              height={1974 * 2}
              alt="imagen persona usando visores de realidad virtual"
            />
          </div>
          <div className="py-16 mb-0 lg:mb-16 px-12 self-center max-w-[600px] mx-auto text-black font-normal text-base text-center relative">
            <Image
              className="mb-8 relative"
              src={"/assets/images/logo-black.webp"}
              width={952 / 2}
              height={72 / 2}
              alt="logo codesight negro"
            />
            <p className="mb-4 relative z-20">
              Enfrenta el futuro con los ojos abiertos. Miramos más allá del
              horizonte digital para anticipar y adaptarnos a las evoluciones
              tecnológicas.
            </p>
            <p className="relative z-20">
              Nuestra pasión por la innovación y la excelencia técnica nos
              convierte en tu aliado ideal para conquistar desafíos digitales y
              transformarlos en oportunidades de éxito.
            </p>
          </div>
        </section>

        <section id="valores" className="bg-black overflow-hidden relative">
          <CodesightFigureStart />
          <CodesightFigureMiddle />
          <CodesightFigureEnd />
          <div className="max-w-screen-xl py-28 px-8 mx-auto z-10">
            <div className="mb-14 lg:mb-28 flex gap-4 justify-between">
              <Image
                className="object-contain z-10 mx-auto lg:mx-0"
                src={"/assets/images/logo.webp"}
                width={1030 / 3}
                height={78 / 3}
                alt="Logo Codesight"
              />
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-16 text-gray-300 text-base leading-8 relative">
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

        <section id="stack" className="py-24">
          <h3 className="mb-16 text-3xl text-center">Stack Tecnológico</h3>
          <TechMarquee />
        </section>

        <section
          id="contacto"
          className="py-16 px-4 sm:px-16 relative grid lg:grid-cols-2 overflow-hidden gap-8 bg-cover bg-no-repeat bg-center bg-[url(/assets/images/bg-form.webp)]"
        >
          <video
            className="absolute inset-0 w-full h-full object-fill"
            loop
            muted
            autoPlay
          >
            <source src="/assets/videos/video-form.webm" type="video/mp4" />
          </video>
          <div className="flex z-10 justify-center flex-col gap-2 items-center text-white text-center text-3xl lg:text-start lg:text-5xl text-pretty font-bold">
            <div className="w-full sm:max-w-[600px]">
              <h3 className="leading-snug">
                ¿Tienes un proyecto? Nos encantaría ayudarte.
              </h3>
            </div>
          </div>
          <Form />
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

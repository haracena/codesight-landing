import Image from "next/image";
import Marquee from "react-fast-marquee";

function TechMarquee() {
  return (
    <Marquee autoFill>
      <Image
        className="mx-10"
        src={"/assets/images/react.png"}
        width={176}
        height={61}
        alt="logo react js"
      />
      <Image
        className="mx-10"
        src={"/assets/images/next.png"}
        width={167}
        height={100}
        alt="logo next js"
      />
      <Image
        className="mx-10"
        src={"/assets/images/vue.png"}
        width={166}
        height={83}
        alt="logo vue js"
      />
      <Image
        className="mx-10"
        src={"/assets/images/express.png"}
        width={239}
        height={86}
        alt="logo express"
      />
      <Image
        className="mx-10"
        src={"/assets/images/laravel.png"}
        width={222}
        height={71}
        alt="logo laravel"
      />
      <Image
        className="mx-10"
        src={"/assets/images/netcore.png"}
        width={86}
        height={86}
        alt="logo .net core"
      />
    </Marquee>
  );
}

export default TechMarquee;

import { Tours_container } from "@/components/shared/tours-container";
import { MoveUpRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  interface ToursItem {
    name: string;
    desc: string;
    date: string;
    dateNum: string;
    imageURL: string;
    key: number;
  }
  const items: ToursItem[] = [
    {
      name: "Свадебная фотосессия",
      desc: "Создайте незабываемые воспоминания о вашем особенном дне с нашими профессиональными фотографами.",
      date: "август",
      dateNum: "23",
      imageURL: "/1.svg",
      key: 0,
    },
    {
      name: "Семейная фотосессия",
      desc: "Запечатлейте радостные моменты с вашей семьей в нашей уютной фотостудии.",
      date: "август",
      dateNum: "15",
      imageURL: "/2.svg",
      key: 1,
    },
    {
      name: "Индивидуальная фотосессия",
      desc: "Подчеркните свою индивидуальность и стиль с помощью наших креативных фотосессий.",
      date: "июль",
      dateNum: "28",
      imageURL: "/3.svg",
      key: 2,
    },
  ];
  return (
    <main className="">
      <section className=" h-screen relative">
        <Image
          className="size-full object-cover filter brightness-50"
          src="/image.svg"
          alt="hero"
          width={1920}
          height={1080}
        />
        <div className="absolute  bottom-[60px] right-[200px] w-[800px] flex flex-col gap-4 items-end">
          <h2 className="font-regular text-8xl uppercase">Фотосессии</h2>
          <h1 className="font-bold text-5xl uppercase">в нашей студии</h1>
          <p className="text-end opacity-50 ">
            Создайте незабываемые воспоминания с нашими профессиональными
            фотографами.
          </p>
          <button className="  py-4 px-16 bg-[#16999E] text-black uppercase">
            Подробнее
          </button>
        </div>
      </section>
      <section className="relative pt-[115px]">
        <div className="max-w-[1200px] mx-auto flex flex-col gap-12">
          <h1 className="uppercase text-[36px] font-bold">
            немного <br />
            <span className="text-[#16999E]">о нашей студии</span>
          </h1>
          <div className="text-[24px] font-bold flex justify-between gap-4 align-center">
            <button className="uppercase text-[#29343E] bg-[#16999E]   w-full rounded-2xl p-6 text-start">
              кто мы?
            </button>
            <button className="uppercase w-full border border-[#16999E] rounded-2xl p-6 text-start">
              что <span className="text-[#16999E]">мы делаем?</span>
            </button>
            <button className="uppercase w-full border border-[#16999E] rounded-2xl p-6 text-start">
              кто <span className="text-[#16999E]">наши клиенты?</span>
            </button>
          </div>
          <div className="grid grid-cols-2 gap-[50px]">
            <div className="flex flex-col justify-between">
              <Image src="/about.svg" alt="hero" width={270} height={280} />
              <p>
                Наша фотостудия предлагает широкий спектр услуг, от свадебных и
                семейных фотосессий до индивидуальных и корпоративных съемок.
              </p>
            </div>
            <Image src="/imageAbout.svg" alt="hero" width={590} height={450} />
          </div>
        </div>
      </section>
      <section className="relative pt-[115px]">
        <div className="max-w-[1200px] mx-auto pb-12">
          <h1 className="uppercase text-[36px] font-bold">
            ближайшие <span className="text-[#16999E]"> фотосессии</span>
          </h1>
        </div>
        <Image src="/countres.svg" alt="hero" width={1920} height={450} />
      </section>
      <section className="relative  pt-[180px]">
        <Tours_container />

        <div className="absolute top-[270px] left-0 w-full z-[-1] h-[1080px] bg-gradient-to-b from-[#090909] to-[#29343e]"></div>
        <Image
          className="absolute top-[-800px] left-0 w-full z-[-1] object-cover"
          src="/mountains.svg"
          alt="hero"
          width={1920}
          height={450}
        />
      </section>
      <section className="relative pt-[380px]">
        <div className="max-w-[1200px] mx-auto flex gap-12 justify-between items-center">
          <h1 className="uppercase text-[36px] font-bold">
            идеи <span className="text-[#16999E]">фотосессий</span>
          </h1>
          <Link className="flex items-center gap-2 text-[#16999E]" href="/">
            Смотреть все публикации <MoveUpRight />
          </Link>
        </div>
        <div className="flex justify-between items-center gap-12 max-w-[1350px] mx-auto pt-[50px]">
          <button
            className="uppercase text-[#16999E] border border-[2px] border-[#16999E] w-full rounded-2xl p-2 text-center
           hover:bg-[#16999E] hover:text-[#29343E] transition-all-ease-in-out duration-300"
          >
            свадебные
          </button>
          <button
            className="uppercase text-[#16999E] border border-[2px] border-[#16999E] w-full rounded-2xl p-2 text-center
           hover:bg-[#16999E] hover:text-[#29343E] transition-all-ease-in-out duration-300"
          >
            семейные
          </button>
          <button
            className="uppercase text-[#16999E] border border-[2px] border-[#16999E] w-full rounded-2xl p-2 text-center
           hover:bg-[#16999E] hover:text-[#29343E] transition-all-ease-in-out duration-300"
          >
            индивидуальные
          </button>
          <button
            className="uppercase text-[#16999E] border border-[2px] border-[#16999E] w-full rounded-2xl p-2 text-center
           hover:bg-[#16999E] hover:text-[#29343E] transition-all-ease-in-out duration-300"
          >
            корпоративные
          </button>
          <button
            className="uppercase text-[#16999E] border border-[2px] border-[#16999E] w-full rounded-2xl p-2 text-center
           hover:bg-[#16999E] hover:text-[#29343E] transition-all-ease-in-out duration-300"
          >
            детские
          </button>
        </div>
        <div className="flex flex-col gap-[100px] max-w-[1450px] mx-auto pt-[120px]">
          {items.map((item) => (
            <div
              key={item.key}
              className="relative flex gap-[90px] items-center after:content-[''] after:absolute after:bottom-[-50px] after:block after:h-[2px] after:bg-[#F3F3F3] after:w-full after:mt-2 after:pl-[-4px]"
            >
              <h1 className="uppercase flex flex-col gap-0 items-start">
                {item.date}
                <span className="text-[#447F8D] font-bold text-[40px]">
                  {item.dateNum}
                </span>
              </h1>
              <Image src={item.imageURL} alt="hero" width={500} height={300} />
              <div className="flex flex-col justify-between items-start h-[300px]">
                <div className="flex flex-col gap-[12px]">
                  <h1 className="uppercase font-medium text-[24px] pb-10px">
                    {item.name}
                  </h1>
                  <p>{item.desc}</p>
                  <Link
                    className="flex items-center gap-2 text-[#16999E]"
                    href="/"
                  >
                    Узнать больше <MoveUpRight />
                  </Link>
                </div>

                <h2 className="uppercase text-[10px]">{item.name}</h2>
              </div>
            </div>
          ))}
        </div>
        <Image
          className="absolute top-[-300px] left-0 w-full z-[-1] object-cover"
          src="/bgImagePeople.svg"
          alt="hero"
          width={1920}
          height={450}
        />
      </section>
      <section className="relative pt-[180px]">
        <div className="flex justify-between items-center max-w-[1200px] mx-auto gap-12">
          <p className="text-[18px] text-[#FFFCF9] font-light">
            <strong className="font-semibold">Мы создаем</strong> уникальные
            фотосессии, которые подчеркнут вашу индивидуальность и стиль.
            Работаем с группами до 10 человек и лично их сопровождаем.
          </p>
          <Image src="/compass.svg" alt="hero" width={300} height={300} />
          <p className="text-[18px] text-[#FFFCF9] font-light">
            <strong className="font-semibold">Мы создаем</strong> уникальные
            фотосессии, которые подчеркнут вашу индивидуальность и стиль.
            Работаем с группами до 10 человек и лично их сопровождаем.
          </p>
        </div>
        <Image
          className="absolute top-[-500px] left-0 w-full z-[-1] object-cover"
          src="/bgImagemail.svg"
          alt="hero"
          width={1920}
          height={450}
        />
      </section>
    </main>
  );
}

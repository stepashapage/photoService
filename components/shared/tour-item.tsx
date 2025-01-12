import React from "react";
import Image from "next/image";
import { Calendar, Camera, Star } from "lucide-react";
import Link from "next/link";

type Props = {
  imageURL: string;
  price: string;
  name: string;
  desc: string;
  date: string;
  id?: string;
};

export const Tour_item: React.FC<Props> = ({
  imageURL,
  price,
  name,
  desc,
  date,
  id,
}) => {
  return (
    <div className="relative border border-[#16999E] w-full h-[580px]">
      <Image
        className="absolute top-[-25px] left-[30px] "
        src={imageURL}
        alt="tour"
        width={825}
        height={540}
      />
      <div className="absolute top-[50px] right-[25px] w-[650px] h-[560px] bg-fill-101315-41 backdrop-blur-58 ">
        <div className="flex flex-col gap-12 justify-between px-6 pt-12 gap-[75px]">
          <div className="flex flex-col gap-4">
            <div className="flex flex-col gap-2">
              <h1 className="uppercase font-semibold text-4xl ">{name}</h1>
              <h2 className="text-[#447F8D]">
                Прекрасная фотосессия в нашей студии
              </h2>
            </div>
            <p className="text-[#16999E] text-[30px] tracking-wider after:content-[''] after:block after:h-[2px] after:bg-[#447F8D] after:w-full after:mt-2 after:pl-[-4px]">
              {date}
            </p>
            <p className="opacity-50 w-[80%]">{desc}</p>
          </div>
          <div className="flex flex-col gap-4 items-end">
            <div className="flex flex-col gap-0">
              <h2 className="text-[#447F8D] font-light text-end">
                за человека
              </h2>
              <h1 className="uppercase font-bold text-4xl">
                {price} <span className="text-[#16999E]"> ₽</span>
              </h1>
            </div>
            <Link
              href={{
                pathname: `/tour/${id}`,
                query: {
                  name,
                  description: desc,
                  price,
                  img: imageURL,
                  Date: date,
                },
              }}
              className="w-full flex"
            >
              <button className="uppercase w-full bg-[#16999E]  py-[12px]">
                Забронировать
              </button>
              <button className="uppercase w-full border border-[#16999E] py-[12px]">
                подробнее о фотосессии
              </button>
            </Link>
            <div className="flex gap-6 justify-center items-center w-full">
              <div className="flex gap-2 justify-center items-center">
                <Calendar size={24} color="#447F8D" />
                <p className="text-[20px]">1 час</p>
              </div>
              <div className="flex gap-2 justify-center items-center">
                <Camera size={24} color="#447F8D" />
                <p className="text-[20px]">фотосессия</p>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute top-[18px] right-[19px] flex gap-1">
          <Star size={20} color="#16999E" />
          <Star size={20} color="#16999E" />
          <Star size={20} color="#16999E" />
          <Star size={20} color="#16999E" />
          <Star size={20} color="#16999E" />
        </div>
      </div>
    </div>
  );
};

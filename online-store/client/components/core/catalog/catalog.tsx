import { Categories } from "@/components/shared/categories";
import { Container } from "@/components/shared/container";
import { Menu } from "lucide-react";
/*
export default function Catalog() {
  return (
    <Container className="w-full bg-[#B7CDF3]">
      <div className="max-w-[1200px] flex items-center mx-auto my-auto h-[60px] justify-between ">
        <div className="flex">
          <Menu />
          <h1>КАТАЛОГ</h1>
        </div>
        <Categories />
        <div></div>
      </div>
    </Container>
  );
}*/
/*
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { cn } from "@/lib/utils";

interface Props {
  className?: string;
}

export const Catalog: React.FC<Props> = ({ className }) => {
  return (
    <Container className="w-full bg-[#B7CDF3]">
      <div className="max-w-[1200px] flex items-center mx-auto my-auto h-[60px] justify-between ">
        <Popover>
          <PopoverTrigger asChild className="">
            <div
              className={cn(
                "inline-flex items-center gap-1 px-10 rounded-1xl cursor-pointer",
                className
              )}
            >
              <Menu />
              <h1>КАТАЛОГ</h1>
            </div>
          </PopoverTrigger>
          <PopoverContent className="">
            <ul>
              <li className="hover:bg-[#E9F1FF] hover:text-primary p-2 px-4 cursor-pointer rounded-1xl">
                По популярности
              </li>
              <li className="hover:bg-[#E9F1FF] hover:text-primary p-2 px-4 cursor-pointer rounded-1xl">
                Сначала недорогие
              </li>
              <li className="hover:bg-[#E9F1FF] hover:text-primary p-2 px-4 cursor-pointer rounded-1xl">
                Сначала дорогие
              </li>
              <li className="hover:bg-[#E9F1FF] hover:text-primary p-2 px-4 cursor-pointer rounded-1xl">
                С лучшей оценкой
              </li>
            </ul>
          </PopoverContent>
          <Categories />
          <div></div>
        </Popover>
      </div>
    </Container>
  );
};*/
import React from "react";

import { cn } from "@/lib/utils";
import { ArrowUpDown } from "lucide-react";
import styles from "./SortPopup.module.css";

import { Popover, PopoverContent, PopoverTrigger } from "./popover";

interface Props {
  className?: string;
}

export const Catalog: React.FC<Props> = ({ className }) => {
  return (
    <Container className="w-full bg-[#B7CDF3]">
      <div className="max-w-[1200px] flex items-center mx-auto my-auto h-[40px] justify-between ">
        <Popover>
          <PopoverTrigger asChild className={styles.popover}>
            <div
              className={cn(
                "inline-flex items-center gap-1  cursor-pointer",
                className
              )}
            >
              <Menu width="22.5px" height="15px" />

              <b className="">КАТАЛОГ</b>
            </div>
          </PopoverTrigger>
          <PopoverContent className={styles.popoverContent}>
            <h1>
              Одежда
              <ul>
                <li className="hover:bg-[#E9F1FF] hover:text-primary p-2 px-4 cursor-pointer rounded-1xl">
                  Мужская одежда
                </li>
                <li className="hover:bg-[#E9F1FF] hover:text-primary p-2 px-4 cursor-pointer rounded-1xl">
                  Женская одежда
                </li>
              </ul>
            </h1>

            <ul>
              <h1 className="pt-[20px]">Обувь</h1>
              <li className="hover:bg-[#E9F1FF] hover:text-primary p-2 px-4 cursor-pointer rounded-1xl">
                Мужская обувь
              </li>
              <li className="hover:bg-[#E9F1FF] hover:text-primary p-2 px-4 cursor-pointer rounded-1xl">
                Женская обувь
              </li>
            </ul>

            <ul>
              <li className="hover:bg-[#E9F1FF] pt-[10px] pb-[10px] hover:text-primary  cursor-pointer rounded-1xl">
                Аксессуары
              </li>
              <li className="hover:bg-[#E9F1FF] pt-[10px] pb-[10px] hover:text-primary cursor-pointer rounded-1xl">
                Тренажёры
              </li>
              <li className="hover:bg-[#E9F1FF] pt-[10px] pb-[10px] hover:text-primary cursor-pointer rounded-1xl">
                Спортивное питание
              </li>
            </ul>
          </PopoverContent>
        </Popover>
        <Categories />
        <div></div>
      </div>
    </Container>
  );
};

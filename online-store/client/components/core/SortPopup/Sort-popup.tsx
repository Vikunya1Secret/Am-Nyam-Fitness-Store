import React from "react";

import { cn } from "@/lib/utils";
import { ArrowUpDown } from "lucide-react";
import styles from "./SortPopup.module.css";

import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

interface Props {
  className?: string;
}

export const SortPopup: React.FC<Props> = ({ className }) => {
  return (
    <Popover>
      <PopoverTrigger asChild className={styles.popover}>
        <div
          className={cn(
            "inline-flex items-center gap-1 px-[27px] rounded-1xl cursor-pointer",
            className
          )}
        >
          <ArrowUpDown className="w-4 h-4" />

          <b className="text-primary">По популярности</b>
        </div>
      </PopoverTrigger>
      <PopoverContent className={styles.popoverContent}>
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
    </Popover>
  );
};

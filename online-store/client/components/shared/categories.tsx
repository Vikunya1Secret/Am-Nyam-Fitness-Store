import { cn } from "@/lib/utils";
import React from "react";
import Link from "next/link";

export interface Props {
  className?: "string";
}
const cats = ["ТРЕНАЖЕРЫ", "ОДЕЖДА", "ПИТАНИЕ", "НОВИНКИ", "БРЕНДЫ", "АКЦИИ"];
const activeIndex = 0;
export const Categories: React.FC<Props> = ({ className }) => {
  return (
    <div className={cn("inline-flex gap-1  p-1 pl-auto pr-auto")}>
      <form
        action="exerciseEquipment"
        className="flex items-center font-cruinn h-4  pl-5 pr-5 m-auto"
      >
        <button>
          <h2>ТРЕНАЖЕРЫ</h2>
        </button>
      </form>
      <form
        action="exerciseEquipment"
        className="flex items-center font-cruinn h-4  pl-5 pr-5 m-auto"
      >
        <button>
          <h2>ОДЕЖДА</h2>
        </button>
      </form>
      <form
        action="exerciseEquipment"
        className="flex items-center font-cruinn h-4  pl-5 pr-5 m-auto"
      >
        <button>
          <h2>ПИТАНИЕ</h2>
        </button>
      </form>
      <form
        action="exerciseEquipment"
        className="flex items-center font-cruinn h-4  pl-5 pr-5 m-auto"
      >
        <button>
          <h2>НОВИНКИ</h2>
        </button>
      </form>
      <form
        action="exerciseEquipment"
        className="flex items-center font-cruinn h-4  pl-5 pr-5 m-auto"
      >
        <button>
          <h2>БРЕНДЫ</h2>
        </button>
      </form>
      <form
        action="exerciseEquipment"
        className="flex items-center font-cruinn h-4  pl-5 pr-5 m-auto"
      >
        <button>
          <h2>АКЦИИ</h2>
        </button>
      </form>
    </div>
  );
};

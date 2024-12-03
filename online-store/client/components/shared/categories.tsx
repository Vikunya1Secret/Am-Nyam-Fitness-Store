import { cn } from "@/lib/utils";
import React from "react";
import Link from "next/link";
import styles from "./categories.module.css";
export interface Props {
  className?: "string";
}
const cats = ["ТРЕНАЖЕРЫ", "ОДЕЖДА", "ПИТАНИЕ", "НОВИНКИ", "БРЕНДЫ", "АКЦИИ"];
const activeIndex = 0;
export const Categories: React.FC<Props> = ({ className }) => {
  return (
    <div className={styles.cats}>
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

/*
import { cn } from "@/lib/utils";
import Link from "next/link";
import React from "react";

interface Props {
  className?: string;
}

const cats = ["ТРЕНАЖЕРЫ", "ОДЕЖДА", "ПИТАНИЕ", "НОВИНКИ", "БРЕНДЫ", "АКЦИИ"];
const activeIndex = 0;

export const Categories: React.FC<Props> = ({ className }) => {
  return (
    <div
      className={cn("inline-flex gap-1 bg-gray-50 p-1 rounded-2xl", className)}
    >
      {cats.map((name, i) => (
        <Link
          key={name}
          className={cn(
            "flex items-center font-bold h-11 rounded-2xl px-5",
            activeIndex === i &&
              "bg-white shadow-md shadow-gray-200 text-primary"
          )}
          href=""
        >
          {name}
        </Link>
      ))}
    </div>
  );
};
*/

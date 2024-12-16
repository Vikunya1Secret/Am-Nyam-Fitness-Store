import Link from 'next/link'
import React from 'react'

import { cn } from '../utils/clsx'

import styles from './categories.module.css'

export interface Props {
	className?: 'string'
}
const cats = ['ТРЕНАЖЕРЫ', 'ОДЕЖДА', 'ПИТАНИЕ', 'НОВИНКИ', 'БРЕНДЫ', 'АКЦИИ']
const activeIndex = 0
export const Categories: React.FC<Props> = ({ className }) => {
	return (
		<div className={styles.cats}>
			<ul>
				<li>
					<Link href='/exerciseEquipment'>ТРЕНАЖЕРЫ</Link>
				</li>
				<li>
					<Link href='/exerciseEquipment'>ОДЕЖДА</Link>
				</li>
				<li>
					<Link href='/blog/first-post'>ПИТАНИЕ</Link>
				</li>
				<li>
					<Link href='/blog/first-post'>НОВИНКИ</Link>
				</li>
				<li>
					<Link href='/blog/first-post'>БРЕНДЫ</Link>
				</li>
				<li>
					<Link href='/blog/first-post'>АКЦИИ</Link>
				</li>
			</ul>
		</div>
	)
}

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

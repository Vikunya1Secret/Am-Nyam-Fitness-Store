import { Menu } from 'lucide-react'
import React from 'react'

import { Categories } from '@/shared/sharedd/categories'
import { Container } from '@/shared/sharedd/container'

import { cn } from '../utils/clsx'

export default function Catalog() {
	return (
		<Container className='w-full bg-[#B7CDF3]'>
			<div className='mx-auto my-auto flex h-[60px] max-w-[1200px] items-center justify-between'>
				<div className='flex'>
					<Menu />
					<h1>КАТАЛОГ</h1>
				</div>
				<Categories />
				<div></div>
			</div>
		</Container>
	)
}
/*
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

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
};
*/

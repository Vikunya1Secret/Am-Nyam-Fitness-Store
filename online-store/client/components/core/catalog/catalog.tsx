import { Menu } from 'lucide-react'
import React from 'react'

import { Categories } from '@/shared/sharedd/categories'
import { Container } from '@/shared/sharedd/container'

import styles from './SortPopup.module.css'
import { Popover, PopoverContent, PopoverTrigger } from './popover'

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
};*/
import { cn } from '@/lib/utils'

interface Props {
	className?: string
}

export const Catalog: React.FC<Props> = ({ className }) => {
	return (
		<Container className='w-full bg-[#B7CDF3]'>
			<div className='mx-auto my-auto flex h-[40px] max-w-[1200px] items-center justify-between'>
				<Popover>
					<PopoverTrigger asChild className={styles.popover}>
						<div
							className={cn(
								'inline-flex cursor-pointer items-center gap-1',
								className
							)}
						>
							<Menu width='22.5px' height='15px' />

							<b className=''>КАТАЛОГ</b>
						</div>
					</PopoverTrigger>
					<PopoverContent className={styles.popoverContent}>
						<h1>
							Одежда
							<ul>
								<li className='rounded-1xl cursor-pointer p-2 px-4 hover:bg-[#E9F1FF] hover:text-primary'>
									Мужская одежда
								</li>
								<li className='rounded-1xl cursor-pointer p-2 px-4 hover:bg-[#E9F1FF] hover:text-primary'>
									Женская одежда
								</li>
							</ul>
						</h1>

						<ul>
							<h1 className='pt-[20px]'>Обувь</h1>
							<li className='rounded-1xl cursor-pointer p-2 px-4 hover:bg-[#E9F1FF] hover:text-primary'>
								Мужская обувь
							</li>
							<li className='rounded-1xl cursor-pointer p-2 px-4 hover:bg-[#E9F1FF] hover:text-primary'>
								Женская обувь
							</li>
						</ul>

						<ul>
							<li className='rounded-1xl cursor-pointer pb-[10px] pt-[10px] hover:bg-[#E9F1FF] hover:text-primary'>
								Аксессуары
							</li>
							<li className='rounded-1xl cursor-pointer pb-[10px] pt-[10px] hover:bg-[#E9F1FF] hover:text-primary'>
								Тренажёры
							</li>
							<li className='rounded-1xl cursor-pointer pb-[10px] pt-[10px] hover:bg-[#E9F1FF] hover:text-primary'>
								Спортивное питание
							</li>
						</ul>
					</PopoverContent>
				</Popover>
				<Categories />
				<div></div>
			</div>
		</Container>
	)
}

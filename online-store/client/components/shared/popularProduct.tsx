import { cn } from "@/lib/utils";
import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "../ui/popularProduct";

interface Props {
  className?: string;
}

export const PopularProduct: React.FC<Props> = ({ className }) => {
  return (
    <div className="bg-[#FFFFFF]">
      <div className="max-w-[1200px] max-h-[1396px] mx-auto my-auto flex   items-center">
        <h1 className="">ПОПУЛЯРНЫЕ ТОВАРЫ</h1>
        <Carousel className="">
          <CarouselContent className="  items-center  ">
            <CarouselItem className="basis-1/3">
              <div>
                <img
                  src="/product1.png"
                  alt="product1"
                  max-width="290px"
                  max-height="300px"
                />
                <div>
                  <h1>2 999 ₽</h1>
                  <h2 className="">Гантель наборная с дисками Torneo, 10 кг</h2>
                  <button>ДОБАВИТЬ В КОРЗИНУ</button>
                </div>
              </div>
            </CarouselItem>
            <CarouselItem className="basis-1/3">
              <div>
                <img
                  src="/product2.png"
                  alt="product2"
                  width="290px"
                  height="300px"
                />
                <div>
                  <h1>9 999 ₽</h1>
                  <h2>Кроссовки мужские adidas Duramo SL</h2>
                  <button>ДОБАВИТЬ В КОРЗИНУ</button>
                </div>
              </div>
            </CarouselItem>
            <CarouselItem className="basis-1/3">
              <div>
                <img
                  src="/product3.png"
                  alt="product3"
                  width="290px"
                  height="300px"
                />
                <div>
                  <h1>2 999 ₽</h1>
                  <h2>Шорты мужские Demix Urban Running 2in1 GFX</h2>
                  <button>ДОБАВИТЬ В КОРЗИНУ</button>
                </div>
              </div>
            </CarouselItem>
            <CarouselItem className="basis-1/3">
              <div>
                <img
                  src="/product4.png"
                  alt="product4"
                  width="290px"
                  height="300px"
                />
                <div>
                  <h1>22 999 ₽</h1>
                  <h2>Кроссовки мужские Nike Revolution 6 Next Natureг</h2>
                  <button>ДОБАВИТЬ В КОРЗИНУ</button>
                </div>
              </div>
            </CarouselItem>

            <CarouselItem className="basis-1/3">
              <div>
                <img
                  src="/product1.png"
                  alt="product1"
                  width="290px"
                  height="300px"
                />
              </div>

              <div>
                <img
                  src="/product2.png"
                  alt="product2"
                  width="290px"
                  height="300px"
                />
              </div>

              <div>
                <img
                  src="/product3.png"
                  alt="product3"
                  width="290px"
                  height="300px"
                />
              </div>

              <div>
                <img
                  src="/product4.png"
                  alt="product4"
                  width="290px"
                  height="300px"
                />
              </div>
            </CarouselItem>
          </CarouselContent>

          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </div>
  );
};

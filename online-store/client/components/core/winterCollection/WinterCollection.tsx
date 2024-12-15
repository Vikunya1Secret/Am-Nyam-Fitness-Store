import React from "react";
import styles from "./WinterCollection.module.css";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./caruselWinterCollection";
import { Button } from "@/components/ui";

interface Props {
  className?: string;
}

export const WinterCollection: React.FC<Props> = () => {
  return (
    <div className="bg-[#FFFFFF]">
      <div className={styles.PopularProduct}>
        <h1 className="">ЗИМНЯЯ КОЛЛЕКЦИЯ</h1>
        <Carousel className="">
          <CarouselContent className={styles.carouselContent}>
            <CarouselItem className="basis-1/4">
              <div className={styles.item}>
                <img
                  src="/product2.png"
                  alt="product2"
                  width="290px"
                  height="302px"
                />
                <div>
                  <h3>Кроссовки мужские adidas Duramo SL</h3>
                  <h2>9 999 ₽</h2>
                  <Button>ДОБАВИТЬ В КОРЗИНУ</Button>
                </div>
              </div>
            </CarouselItem>
            <CarouselItem className="basis-1/4">
              <div className={styles.item}>
                <img
                  src="/product3.png"
                  alt="product3"
                  width="290px"
                  height="302px"
                />
                <div>
                  <h3>Шорты мужские Demix Urban Running 2in1 GFX</h3>
                  <h2>2 999 ₽</h2>
                  <Button>ДОБАВИТЬ В КОРЗИНУ</Button>
                </div>
              </div>
            </CarouselItem>
            <CarouselItem className="basis-1/4">
              <div className={styles.item}>
                <img
                  src="/product4.png"
                  alt="product4"
                  width="290px"
                  height="302px"
                />
                <div>
                  <h3>Кроссовки мужские Nike Revolution 6 Next Natureг</h3>
                  <h2>22 999 ₽</h2>
                  <Button>ДОБАВИТЬ В КОРЗИНУ</Button>
                </div>
              </div>
            </CarouselItem>
            <CarouselItem className="basis-1/4">
              <div className={styles.item}>
                <img
                  src="/product3.png"
                  alt="product3"
                  width="290px"
                  height="302px"
                />
                <div>
                  <h3>Шорты мужские Demix Urban Running 2in1 GFX</h3>
                  <h2>2 999 ₽</h2>
                  <Button>ДОБАВИТЬ В КОРЗИНУ</Button>
                </div>
              </div>
            </CarouselItem>
            <CarouselItem className="basis-1/4">
              <div className={styles.item}>
                <img
                  src="/product4.png"
                  alt="product4"
                  width="290px"
                  height="302px"
                />
                <div>
                  <h3>Кроссовки мужские Nike Revolution 6 Next Natureг</h3>
                  <h2>22 999 ₽</h2>
                  <Button>ДОБАВИТЬ В КОРЗИНУ</Button>
                </div>
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

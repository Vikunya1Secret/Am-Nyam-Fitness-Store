import React from "react";
import styles from "./WinterCollection.module.css";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./caruselWinterCollection";

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
            <CarouselItem className="basis-1/3">
              <div>
                <img
                  src="/product2.png"
                  alt="product2"
                  width="290px"
                  height="300px"
                />
                <div>
                  <h2>9 999 ₽</h2>
                  <h3>Кроссовки мужские adidas Duramo SL</h3>
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
                  <h2>2 999 ₽</h2>
                  <h3>Шорты мужские Demix Urban Running 2in1 GFX</h3>
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
                  <h2>22 999 ₽</h2>
                  <h3>Кроссовки мужские Nike Revolution 6 Next Natureг</h3>
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
                  <h2>2 999 ₽</h2>
                  <h3>Шорты мужские Demix Urban Running 2in1 GFX</h3>
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
                  <h2>22 999 ₽</h2>
                  <h3>Кроссовки мужские Nike Revolution 6 Next Natureг</h3>
                  <button>ДОБАВИТЬ В КОРЗИНУ</button>
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

/*<CarouselItem className="basis-1/3">
              <div>
                <img
                  src="/product1.png"
                  alt="product1"
                  max-width="290px"
                  max-height="300px"
                />
                <div>
                  <h2>2 999 ₽</h2>
                  <h3 className="">Гантель наборная с дисками Torneo, 10 кг</h3>
                  <button>ДОБАВИТЬ В КОРЗИНУ</button>
                </div>
              </div>
            </CarouselItem>*/

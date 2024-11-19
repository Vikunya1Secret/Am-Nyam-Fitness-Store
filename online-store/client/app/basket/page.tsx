import styles from "./Basket.module.css";
import { Container } from "@/components/shared/container";
import { Header } from "@/components/shared/header";
import { Fotter } from "@/components/core/Footer";
import Catalog from "@/components/shared/catalog";
import { PopularProduct } from "@/components/core/popularProduct";
export default function Basket() {
  return (
    <Container className="w-full ">
      <Header />
      <Catalog />
      <div className={styles.basket}>
        <h1>В вашей корзине пусто</h1>
        <div>
          <img src="/basket.png" alt="basket" />
        </div>
        <h2>
          Чтобы облегчить покупку войдите в личный кабинет. <br />
          Вдруг у вас есть крутой список избранных товаров или что-то завалялось
          в корзине. А за новинками — в каталог.
        </h2>
      </div>
      <PopularProduct />
      <Fotter />
    </Container>
  );
}

import styles from "./404.module.css";
import { Container } from "@/components/shared/container";
import { Header } from "@/components/shared/header";
import { Catalog } from "@/components/core/catalog/catalog";
import { Fotter } from "@/components/core/Footer";
export default function Basket() {
  return (
    <Container className="w-full ">
      <Header />
      <Catalog />
      <div className={styles.page}>
        <div>
          <img src="/work-in-progress.png" alt="basket" />
        </div>
        <h2>
          Кажется, вы попали не туда, но это легко исправить!
          <br /> Загляните в наш каталог за идеями или проверьте избранное —
          возможно, там уже ждёт что-то особенное.
        </h2>
      </div>
      <Fotter />
    </Container>
  );
}

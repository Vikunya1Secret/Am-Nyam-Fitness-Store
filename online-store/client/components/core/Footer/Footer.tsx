import styles from "./Footer.module.css";
import React from "react";
import { Button } from "@/components/ui/button";
import { Container } from "@/components/shared/container";

interface Props {
  className?: string;
}

export const Fotter: React.FC<Props> = () => {
  return (
    <footer className={styles.footer}>
      <Container className={styles.container}>
        <ul className={styles.ulfooter}>
          <li>
            <button>
              <h2>О компании</h2>
            </button>
          </li>
          <li>
            <button>
              <h2>Помощь</h2>
            </button>
          </li>
          <li>
            <button>
              <h2>Контакты</h2>
            </button>
          </li>
          <li>
            <button>
              <h2>Новости</h2>
            </button>
          </li>
          <li>
            <button>
              <h2>Вакансии</h2>
            </button>
          </li>
          <li>
            <button>
              <h2>Сотрудничество</h2>
            </button>
          </li>
          <li>
            <button>
              <h2>Доставка и оплата</h2>
            </button>
          </li>
        </ul>

        <div className={styles.line}></div>
        {/* Нижняя часть после линии */}
        <div className={styles.downfotter}>
          <div className={styles.fitZone}>
            <img src="/Logo.jpg" alt="logo" />
            <p>© FitZone. 2024 Все права защищены</p>
          </div>

          <div className={styles.footer_logo_and_nav}>
            <div>
              <a href="#">
                <Button variant="default">
                  <img src="/vk.png" alt="logo" width="45" height="45" />
                </Button>
              </a>
              <a href="#">
                <Button variant="default">
                  <img src="/tg.png" alt="logo" />
                </Button>
              </a>
              <a href="#">
                <Button variant="default">
                  <img src="/yandex.png" alt="logo" />
                </Button>
              </a>
            </div>
            <div className={styles.social_network}>
              <ul>
                <li>
                  <button>
                    <h2>Подписаться на рассылку</h2>
                  </button>
                </li>
                <li>
                  <button>
                    <h2>Политика обработки персональных данных</h2>
                  </button>
                </li>
                <li>
                  <button>
                    <h2 className={styles.lasth2}>Публичная офферта</h2>
                  </button>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
};

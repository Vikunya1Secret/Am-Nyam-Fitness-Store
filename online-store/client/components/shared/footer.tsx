import { cn } from "@/lib/utils";
import React from "react";
import { Container } from "./container";
import Image from "next/image";
import { Button } from "../ui/button";
import { Heart, ShoppingBag, ShoppingCart, UserRound } from "lucide-react";
import { SearchInput } from "./search-input";

interface Props {
  className?: string;
}

export const Fotter: React.FC<Props> = ({ className }) => {
  return (
    <footer className={cn("", (className = "bg-[#0E0909]"))}>
      <Container className=" max-w-[1198px] max-h-[235px] flex items-center justify-between py-8 ">
        {/* Левая часть */}

        <ul>
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

        <div></div>

        <div>
          <Image src="/Logo.jpg" alt="logo" width={216} height={51} />
          <h2>© FitZone. 2024 Все права защищены</h2>
        </div>

        {/* Середина */}

        {/* Правая часть */}

        <div>
          <div className="flex items-center ">
            <div className="flex items-center">
              <Button variant="default">
                <img src="/vk.png" alt="logo" width="45" height="45" />
              </Button>
            </div>
            <div className="flex items-center">
              <Button variant="default">
                <img src="/tg.png" alt="logo" />
              </Button>
            </div>
            <div className="flex items-center">
              <Button variant="default">
                <img src="/yandex.png" alt="logo" />
              </Button>
            </div>
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
                  <h2>Публичная офферта</h2>
                </button>
              </li>
            </ul>
          </div>
        </div>
      </Container>
    </footer>
  );
};

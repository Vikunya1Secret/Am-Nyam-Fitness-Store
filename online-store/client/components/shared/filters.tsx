import React from "react";

import { FilterCheckbox } from "@/components/shared/filter-checkbox";
import { Input } from "@/components/ui/input";
import { CheckboxFiltersGroup } from "@/components/shared/checkbox-filters-group";
import { Title } from "./title";
import styles from "./filters.module.css";

interface Props {
  className?: string;
}

export const Filters: React.FC<Props> = ({ className }) => {
  return (
    <div className={styles.filter}>
      <div className="mt-5 py-1 pb-1">
        <p className="font-Geologica text-[14px] mb-3">Цена от и до:</p>
        <div className="flex gap-3 mb-5">
          <Input type="number" min={0} max={500000} placeholder="0" />
          <Input type="number" min={1000} max={500000} placeholder="1000" />
        </div>
      </div>
      <div className="mb-[10px] font-Geologica text-[14px]">Тип товара</div>
      <div className="flex flex-col gap-4 font-Geologica text-[14px]">
        <FilterCheckbox text="Кардиотренажеры" value="1" />
        <FilterCheckbox text="Мини-тренажеры" value="2" />
        <FilterCheckbox text="Аксессуары для тренажеров" value="3" />
        <FilterCheckbox text="Фитнес-инвентарь" value="4" />
        <FilterCheckbox text="Спортивные комплексы" value="5" />
      </div>
      <CheckboxFiltersGroup
        className={styles.сheckboxFiltersGroup}
        title="Тип товара"
        limit={6}
        defaultItems={[
          {
            text: "Кардиотренажеры",
            value: "1",
          },
          {
            text: "Мини-тренажеры",
            value: "2",
          },
          {
            text: "Аксессуары для тренажеров",
            value: "3",
          },
          {
            text: "Фитнес-инвентарь",
            value: "4",
          },
          {
            text: "Спортивные комплексы",
            value: "5",
          },
        ]}
        items={[
          {
            text: "Skechers",
            value: "1",
          },
          {
            text: "EvolutiOne",
            value: "2",
          },
          {
            text: "Adidas",
            value: "3",
          },
          {
            text: "Nike",
            value: "4",
          },
          {
            text: "Puma",
            value: "5",
          },
          {
            text: "Rebook",
            value: "6",
          },
          {
            text: "Kappa",
            value: "7",
          },
          {
            text: "Columbia Sportswear",
            value: "8",
          },
          {
            text: "New Balance",
            value: "9",
          },
          {
            text: "EvolutiOne",
            value: "10",
          },
          {
            text: "Arena",
            value: "11",
          },
          {
            text: "Asics",
            value: "12",
          },
        ]}
      />
      <CheckboxFiltersGroup
        className={styles.сheckboxFiltersGroup}
        title="Бренд"
        limit={6}
        defaultItems={[
          {
            text: "Skechers",
            value: "1",
          },
          {
            text: "EvolutiOne",
            value: "2",
          },
          {
            text: "Adidas",
            value: "3",
          },
          {
            text: "Nike",
            value: "4",
          },
          {
            text: "Puma",
            value: "5",
          },
          {
            text: "Rebook",
            value: "6",
          },
        ]}
        items={[
          {
            text: "Skechers",
            value: "1",
          },
          {
            text: "EvolutiOne",
            value: "2",
          },
          {
            text: "Adidas",
            value: "3",
          },
          {
            text: "Nike",
            value: "4",
          },
          {
            text: "Puma",
            value: "5",
          },
          {
            text: "Rebook",
            value: "6",
          },
          {
            text: "Kappa",
            value: "7",
          },
          {
            text: "Columbia Sportswear",
            value: "8",
          },
          {
            text: "New Balance",
            value: "9",
          },
          {
            text: "EvolutiOne",
            value: "10",
          },
          {
            text: "Arena",
            value: "11",
          },
          {
            text: "Asics",
            value: "12",
          },
          {
            text: "Adidas",
            value: "13",
          },
          {
            text: "Nike",
            value: "14",
          },
          {
            text: "Puma",
            value: "15",
          },
          {
            text: "Rebook",
            value: "16",
          },
          {
            text: "Kappa",
            value: "17",
          },
          {
            text: "Columbia Sportswear",
            value: "18",
          },
          {
            text: "New Balance",
            value: "19",
          },
          {
            text: "EvolutiOne",
            value: "20",
          },
          {
            text: "Arena",
            value: "21",
          },
          {
            text: "Asics",
            value: "22",
          },
        ]}
      />
    </div>
  );
};

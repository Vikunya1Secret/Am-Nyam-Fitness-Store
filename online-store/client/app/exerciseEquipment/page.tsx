import { AdvertisingBanners } from "@/components/shared/advertisingBanners";

import { Categories } from "@/components/shared/categories";
import { Container } from "@/components/shared/container";
import { Header } from "@/components/shared/header";
import { Menu } from "lucide-react";

import { Filters } from "@/components/shared/filters";
import { PaginationDemo } from "@/components/shared/pagination";
import { SortPopup } from "@/components/core/SortPopup/Sort-popup";
import { Catalog_ } from "@/components/core/catalog_";
import { Catalog } from "@/components/core/catalog/catalog";
import { Fotter } from "@/components/core/Footer";
export default function ExerciseEquipment() {
  return (
    <Container className="w-full ">
      <Header />
      <Catalog />
      <Catalog_ />
      <PaginationDemo />
      <Fotter />
    </Container>
  );
}

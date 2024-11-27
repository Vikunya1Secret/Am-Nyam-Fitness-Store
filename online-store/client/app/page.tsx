import { AdvertisingBanners } from "@/components/shared/advertisingBanners";
import { Categories } from "@/components/shared/categories";
import { Container } from "@/components/shared/container";
import { Header } from "@/components/shared/header";
import { SortPopup } from "@/components/shared/sort-popup";
import { Menu } from "lucide-react";

import { Fotter } from "@/components/core/Footer";

import { WinterCollection } from "@/components/core/winterCollection";
import Catalog from "@/components/core/catalog/catalog";
import { PopularProduct } from "@/components/core/popularProduct";
export default function Home() {
  return (
    <Container className="w-full ">
      <Header />
      <Catalog />
      <AdvertisingBanners />
      <PopularProduct />
      <WinterCollection />
      <Fotter />
    </Container>
  );
}

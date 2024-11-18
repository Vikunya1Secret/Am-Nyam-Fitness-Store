import { AdvertisingBanners } from "@/components/shared/advertisingBanners";
import { Categories } from "@/components/shared/categories";
import { Container } from "@/components/shared/container";
import { Header } from "@/components/shared/header";
import { SortPopup } from "@/components/shared/sort-popup";
import { Menu } from "lucide-react";
import { Fotter } from "@/components/shared/footer";
import Catalog from "@/components/shared/catalog";
import { PopularProduct } from "@/components/shared/popularProduct";

export default function Home() {
  return (
    <Container className="w-full ">
      <Header />
      <Catalog />
      <AdvertisingBanners />
      <PopularProduct />
      <Fotter />
    </Container>
  );
}

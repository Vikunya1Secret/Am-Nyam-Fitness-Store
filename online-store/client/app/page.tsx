import { AdvertisingBanners } from "@/components/shared/advertisingBanners";
import { Container } from "@/components/shared/container";
import { Header } from "@/components/shared/header";
import { WinterCollection } from "@/components/core/winterCollection";

import { PopularProduct } from "@/components/core/popularProduct";
import { PaginationDemo } from "@/components/shared/pagination";

/* 1 час 10 минут*/
import { Filters } from "@/components/shared/filters";
import { Catalog } from "@/components/core/catalog/catalog";
import { Fotter } from "@/components/core/Footer";

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

import { Categories } from "@/components/shared/categories";
import { Container } from "@/components/shared/container";
import { Menu } from "lucide-react";

export default function Catalog() {
  return (
    <Container className="w-full bg-[#B7CDF3]">
      <div className="max-w-[1200px] flex items-center mx-auto my-auto h-[60px] justify-between ">
        <div className="flex">
          <Menu />
          <h1>КАТАЛОГ</h1>
        </div>
        <Categories />
        <div></div>
      </div>
    </Container>
  );
}

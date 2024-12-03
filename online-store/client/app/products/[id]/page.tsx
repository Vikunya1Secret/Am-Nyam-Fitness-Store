import { Container } from "@/components/shared/container";
import { Header } from "@/components/shared/header";
import { Fotter } from "@/components/core/Footer";
import Catalog from "@/components/shared/catalog";
export default function ProductPage() {
  return (
    <Container className="w-full ">
      <Header />
      <Catalog />
      <div>
        <h1>Product Page</h1>
      </div>
      <Fotter />
    </Container>
  );
}

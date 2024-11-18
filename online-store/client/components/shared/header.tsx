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

export const Header: React.FC<Props> = ({ className }) => {
  return (
    <header className={cn("", className)}>
      <Container className=" max-w-[1200px] flex items-center justify-between py-8 mx-auto my-auto">
        {/* Левая часть */}
        <form action="http://localhost:3000/">
          <Button variant="default">
            <Image src="/Logo.jpg" alt="logo" width={271} height={69} />
          </Button>
        </form>

        {/* Середина */}
        <div className="">
          <SearchInput />
        </div>

        {/* Правая часть */}
        <div className="flex items-center ">
          <form action="like" className="flex items-center">
            <Button variant="default">
              <Heart size="39" />
            </Button>
          </form>
          <form action="account" className="flex items-center">
            <Button variant="default">
              <UserRound size="39" />
            </Button>
          </form>
          <form action="basket" className="flex items-center">
            <Button variant="default">
              <ShoppingBag size="39" />
            </Button>
          </form>
        </div>
      </Container>
    </header>
  );
};

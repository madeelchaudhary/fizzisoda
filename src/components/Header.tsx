import React from "react";
import FizziLogo from "@/components/FizziLogo";

type Props = {};

const Header = (props: Props) => {
  return (
    <header className="-mb-28 flex justify-center py-4">
      <FizziLogo className="z-10 h-20 text-sky-800 cursor-pointer" />
    </header>
  );
};

export default Header;

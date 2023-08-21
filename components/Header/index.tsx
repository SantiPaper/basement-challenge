import Image from "next/image";
import {FunctionComponent} from "react";

import group from "../../public/svg/group.svg";
import logo from "../../public/logo.svg";
import {Container} from "../Container";

export const Header: FunctionComponent = () => {
  return (
    <Container>
      <header className="m-auto text-center flex justify-between text-white">
        <Image alt="Basement" src={logo} />
        <Image alt="" src={group} />
        <button>Cart(1)</button>
      </header>
    </Container>
  );
};

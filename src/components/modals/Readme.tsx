import { Frame } from "@react95/core";
import React, { FC } from "react";

interface ReadmeProps {}

const Readme: FC<ReadmeProps> = ({}) => {
  return (
    <Frame boxShadow="in" bg="white" className="readme">
      <div>
        <h1 style={{ marginTop: 0 }}>🇳🇬🇿🇼🇬🇭 ATTENTION 🇬🇭🇿🇼🇳🇬</h1>
        <p>
          This website is a community contribution made with love by Mr
          Flatter -- world acclaimed autist, retard, visionary, and
          philanthropist.
        </p>
        <p>
          If sers like this contribution, the Honorable Mr Flatter will
          accept tokens of appreciation in $FLAT or $MOG only. No
          shitcoins.
        </p>
        <p>
          Pls sers feed ma familia. Mr Flatter seeks your generous contributions
          for crack and prostitues, and maybe for
          some food.
        </p>
        <p>
          Donation Address:{" "}
          <a
            className="dontaion"
            href="https://etherscan.io/address/0xfb1b9a294fe5ddeb120ca7324943987342eddf24"
          >
            0xfb1b9a294fe5ddeb120ca7324943987342eddf24
          </a>
        </p>
        <p>
          Github repository:{" "}
          <a href="https://0xflat.github.io/flatearth/">
            https://0xflat.github.io/flatearth/
          </a>
        </p>
      </div>
    </Frame>
  );
};

export default Readme;

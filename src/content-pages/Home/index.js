import React from "react";

import { RevealMain, Slides, Section } from "../../components/Reveal";

import FirstContent from "./First";
import HelloThere from "./HelloThere";
// import HelloThree from "./HelloThree.md";

export default function PageHome() {
  return (
    <RevealMain>
      <Slides>
        <Section id="initial">
          <FirstContent />
        </Section>
        <Section id="hello-there">
          <HelloThere />
        </Section>
        <Section id="hello-3" data-markdown>
          <section>
            <textarea data-template>{/* <HelloThree /> */}</textarea>
          </section>
        </Section>
      </Slides>
    </RevealMain>
  );
}

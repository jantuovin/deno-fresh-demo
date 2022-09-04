/** @jsx h */
import { h, Fragment } from "preact";
import { Head } from "$fresh/runtime.ts";

import DarkModeSwitch from "../islands/DarkModeSwitch.tsx";
import { SubSection } from "../components/SubSection.tsx";

export default function Home() {
  return (
    <Fragment>
      <Head>
        <title>Deno + fresh demo</title>
        <link rel="icon" href="/favicon.ico" sizes="any" /> 
        <link rel="stylesheet" href="/styles.css" />
      </Head>

      <main>
        <DarkModeSwitch />

        <section>
          <h1>
            Deno + fresh + islands architecture + dark mode + container queries
          </h1>
          <p>
            Compined Deno, fresh, islands architecture, dark mode and container
            queries demo. Compined Deno, fresh, island architecture, dark mode
            and container queries demo. Compined Deno, fresh, island
            architecture, dark mode and container queries demo. Compined Deno,
            fresh, island architecture, dark mode and container queries demo.
            Compined Deno, fresh, island architecture, dark mode and container
            queries demo.
          </p>
        </section>

        <SubSection
          heading="Deno"
          img={{
            src: "deno.png",
            alt: "Deno logo",
          }}
          paragraph="A modern runtime for JavaScript and TypeScript. Deno is a simple, modern and secure runtime for JavaScript, TypeScript, and WebAssembly that uses V8 and is built in Rust."
        />

        <SubSection
          heading="Fresh"
          img={{
            src: "fresh.svg",
            alt: "Fresh logo",
          }}
          paragraph="The next-gen web framework, Built for speed, reliability, and simplicity. Just-in-time rendering on the edge. Island based client hydration for maximum interactivity. Zero runtime overhead: no JS is shipped to the client by default. No build step. No configuration necessary. TypeScript support out of the box."
        />

        <SubSection
          heading="Islands architecture"
          img={{
            src: "island.jpg",
            alt: "Islands architecture logo",
          }}
          paragraph="The general idea of an “Islands” architecture is deceptively simple: render HTML pages on the server, and inject placeholders or slots around highly dynamic regions. These placeholders/slots contain the server-rendered HTML output from their corresponding widget. They denote regions that can then be hydrated on the client into small self-contained widgets, reusing their server-rendered initial HTML."
        />

        <SubSection
          heading="Dark mode"
          img={{
            src: "darkmode.jpg",
            alt: "Dark mode logo",
          }}
          paragraph="Dark mode is a display setting for user interfaces, such as a smartphone or laptop. It means that, instead of the default dark text showing up against a light screen (known as ‘light mode’), a light colour text (white or grey) is presented against a dark or black screen."
        />

        <SubSection
          heading="CSS container queries"
          img={{
            src: "css.png",
            alt: "Container queries logo",
          }}
          paragraph="Container queries are queries that help us style a container’s content based on its properties, like width and height. This takes a different approach from media queries, which help us style our web pages/websites based on changes on the viewport."
        />
      </main>
    </Fragment>
  );
}

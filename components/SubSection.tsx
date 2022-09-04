/** @jsx h */
import { h } from "preact";

interface SubctionProps {
  heading: string;
  img: {
    src: string;
    alt: string;
  }
  paragraph: string;
}

export function SubSection<SubctionProps>({ heading, img, paragraph }) {
  return (
    <section>
      <h2>{heading}</h2>
      <img src={img.src} alt={img.alt} loading="lazy" />
      <p>{paragraph}</p>
    </section>
  );
}

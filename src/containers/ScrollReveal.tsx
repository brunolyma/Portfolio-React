import { ReactNode, useEffect, useRef } from "react";
import scrollReveal from "scrollreveal";

export function ScrollReveal({ children, id }: {children: ReactNode, id: string}) {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (sectionRef.current)
      scrollReveal().reveal(sectionRef.current, {
        reset: false,
        delay: 500,
      });
  }, []);

  return <section id={id} ref={sectionRef}>{children}</section>;
}

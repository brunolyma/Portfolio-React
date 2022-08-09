import CV from "../../assets/bruno_lima-cv.pdf";

export function CTA() {
  return (
    <div className="cta">
      <a className="btn" href={CV} download="bruno_lima-CV.pdf">
        Download CV
      </a>
      <a className="btn btn-primary" href="#contact">
        Let's Talk
      </a>
    </div>
  );
}

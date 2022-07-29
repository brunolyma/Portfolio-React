import CV from '../../assets/cv.pdf'

export function CTA() {
  return (
    <div className="cta">
      <a className='btn' href={CV} download='Bruno Lima - CV.pdf'>Download CV</a>
      <a className='btn btn-primary' href="#contact">Let's Talk</a>
    </div>
  );
}

import "./AtomAnimation.css";

const AtomAnimation = () => {
  return (
    <span className="brand-mark" aria-hidden="true">
      <span className="brand-mark__symbol">
        <svg viewBox="0 0 72 72" role="img" className="brand-mark__svg">
          <circle cx="36" cy="36" r="4.5" className="brand-mark__core" />
          <ellipse cx="36" cy="36" rx="23" ry="9" className="brand-mark__orbit brand-mark__orbit--one" />
          <ellipse cx="36" cy="36" rx="23" ry="9" className="brand-mark__orbit brand-mark__orbit--two" />
          <ellipse cx="36" cy="36" rx="23" ry="9" className="brand-mark__orbit brand-mark__orbit--three" />
          <circle cx="59" cy="36" r="3" className="brand-mark__node" />
          <circle cx="13" cy="36" r="2.4" className="brand-mark__node brand-mark__node--green" />
        </svg>
      </span>
      <span className="brand-mark__text">
        <strong>Khaled</strong>
        <small>Creative full-stack</small>
      </span>
    </span>
  );
};

export default AtomAnimation;

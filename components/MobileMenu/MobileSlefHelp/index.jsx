const SelfhelpMenu = () => {
  return (
    <div className="selfhelp-menu">
      <div className="selfhelp-menu__container">
        <div className="selfhelp-menu__topic-container">
          <a href="/tools">
            <b>Tools</b>
          </a>
          <a href="/free-settlement-agreement-calculator/">Calculator</a>
          <a href="/templates">Templates</a>
          <a target="_blank" href="https://virtuallawyer.monacosolicitors.co.uk">
            Letter Builder
          </a>
        </div>
        <div className="selfhelp-menu__topic-container">
          <a href="/case-types">
            <b>Advice</b>
          </a>
          <a href="https://virtuallawyer.monacosolicitors.co.uk/" target="_blank">Free Advice</a>
          <a href="/faqs">Q&As</a>
          <a href="/tactics">Do I Have A Case</a>
        </div>
      </div>
    </div>
  );
};

export default SelfhelpMenu;

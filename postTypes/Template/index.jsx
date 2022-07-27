import sanitizeHTML from '../../utils/sanitiseHTML';
import Reviews from '../../components/Reviews';

const Template = ({ data }) => {
  const templateData = data.templateBy;
  const { title, content, templates } = templateData;

  return (
    <div className="template">
      <h1>{title}</h1>
      <div dangerouslySetInnerHTML={{ __html: sanitizeHTML(content) }} />
      <div className="template__download__container">
        <h3>Download your free template</h3>
        <p>
          Please enter your first name and email address to download your template and instructions
          on how to use it
        </p>
        <div className="template__download__form">
          <div className="template__download__details">
            <p>First name:</p>
            <input type="text" />
          </div>

          <div className="template__download__details">
            <p>Last name:</p>
            <input type="text" />
          </div>

          <a className="button" href={templates?.file?.mediaItemUrl}>
            Download Now
          </a>
        </div>
      </div>

      <div className="template__letter">
        <div dangerouslySetInnerHTML={{ __html: sanitizeHTML(templates.letter) }}></div>
      </div>
      <Reviews>
        <h3>Rated 4.8 Stars in Over 700 Reviews</h3>
        <p>
          You can rest assured that, because we represent individuals only, there is no{' '}
          <span>conflict of interest</span>
        </p>
      </Reviews>
    </div>
  );
};

export default Template;

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

import classes from './Footer.module.css';

const Footer = () => {
  return (
    <div className={classes.footer}>
      <a className={classes.link} href='https://github.com/kaquino1/sorting-visualizer'>
        <div className={classes.inner}>
          <FontAwesomeIcon icon={faGithub} />
          <span>GitHub</span>
        </div>
      </a>
    </div>
  );
};

export default Footer;

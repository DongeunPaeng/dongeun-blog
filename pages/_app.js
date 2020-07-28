import { library, config } from "@fortawesome/fontawesome-svg-core";
import {
  faSortNumericDown,
  faSortNumericUp,
  faBorderAll,
  faList,
} from "@fortawesome/free-solid-svg-icons";

config.autoAddCss = false;
library.add(faList, faBorderAll, faSortNumericDown, faSortNumericUp);

import "@fortawesome/fontawesome-svg-core/styles.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "highlight.js/styles/vs2015.css";
import "styles/index.scss";

export default ({ Component, pageProps }) => <Component {...pageProps} />;

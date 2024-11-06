

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome } from '@fortawesome/free-solid-svg-icons'
import { faTwitter } from '@fortawesome/free-brands-svg-icons'
const FontAwesome = () => {
    return (
        <div>
          <h1>My Component</h1>
          <FontAwesomeIcon icon={faHome} />
          <FontAwesomeIcon icon={faTwitter} size="2x" color="blue" className="my-icon" />
        </div>
    );
}

export default FontAwesome;

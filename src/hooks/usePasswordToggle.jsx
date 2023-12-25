import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const usePasswordToggle = () => {
    const [visibility, setVisibility] = useState(false);

    const Icon = (
        <FontAwesomeIcon icon={visibility ? 'fa-solid fa-eye-slash' : 'fa-solid fa-eye'}
        onClick={() => setVisibility(visibility => !visibility)} 
        />
    )

    const InputType = visibility ? 'text' : 'password';

    return [InputType, Icon]
}

export default usePasswordToggle

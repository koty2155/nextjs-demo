'use client';

import { useState } from 'react';

export const useShowPassword = () => {
    const [showPassword, setShowPassword] = useState(false);

    const toggleShowPassword = (): void => {
        setShowPassword((prevShowPassword) => !prevShowPassword);
    };

    return { showPassword, toggleShowPassword };
};

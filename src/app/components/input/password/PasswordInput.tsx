import { FC } from 'react';
import { Input, InputProps } from '../Input';
import { useShowPassword } from './useShowPassword';
import { Eye } from '../../icons/Eye';
import { EyeLashed } from '../../icons/EyeLashed';
import styles from './styles.module.scss';

export const PasswordInput: FC<InputProps> = ({ ...props }) => {
    const { showPassword, toggleShowPassword } = useShowPassword();

    return (
        <div className={styles.password}>
            <Input type={showPassword ? 'text' : 'password'} id="password" label="Your password" {...props} />
            <button className={styles.visibilityToggle} onClick={toggleShowPassword}>
                {showPassword ? <EyeLashed /> : <Eye />}
            </button>
        </div>
    );
};

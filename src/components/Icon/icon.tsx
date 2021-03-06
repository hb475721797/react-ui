import React from 'react';
import classNames from 'classnames';
import { FontAwesomeIcon, FontAwesomeIconProps } from '@fortawesome/react-fontawesome';

export type ThemeProps = 'primary' | 'secondary' | 'success' | 'info' | 'warning' | 'danger' | 'light' | 'dark';

export interface IconPros extends FontAwesomeIconProps {
  theme?: ThemeProps;
}

const Icon: React.FC<IconPros> = (props) => {
  const { className, theme, ...restProps } = props;
  const classes = classNames('viking-icon', className, {
    [`icon-${theme}`]: theme,
  });

  return <FontAwesomeIcon {...restProps} className={classes} />;
};

export default Icon;

import React from 'react';
import IconButton from '@mui/material/IconButton';

type IconButtonWidgetType = {
    children: React.ReactNode
    ariaLabel: string
    size?: "small" | "medium" | "large"
}
export const IconButtonWidget = (props: IconButtonWidgetType) => {
    const {children, ariaLabel, size} = props;
    return (
        <IconButton {...props}  aria-label={ariaLabel} size={size}>
            {children}
        </IconButton>
    );
};
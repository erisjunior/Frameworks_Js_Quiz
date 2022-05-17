import React from 'react';

export interface ButtonProps {
  children: React.ReactNode;
  disabled?: boolean;
  focused?: boolean;
  onClick(): any;
}

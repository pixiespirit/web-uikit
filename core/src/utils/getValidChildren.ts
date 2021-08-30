import React from 'react';
export function getValidChildren(
  children: React.ReactNode
): React.ReactElement[] {
  return React.Children.toArray(children).filter((child) =>
    React.isValidElement(child)
  ) as React.ReactElement[];
}

import * as React from "react"
import styled, { css } from "styled-components"
import { Slot } from "@radix-ui/react-slot"

// Button variants type
type ButtonVariant = 'default' | 'destructive' | 'outline' | 'secondary' | 'tertiary' | 'ghost' | 'link';
type ButtonSize = 'default' | 'sm' | 'lg' | 'icon';

interface StyledButtonProps {
  $variant: ButtonVariant;
  $size: ButtonSize;
}

const getVariantStyles = (variant: ButtonVariant) => {
  switch (variant) {
    case 'default':
      return css`
        background-color: ${({ theme }) => theme.colors.primary[500]};
        color: white;
        box-shadow: ${({ theme }) => theme.shadows.sm};
        
        &:hover:not(:disabled) {
          background-color: ${({ theme }) => theme.colors.primary[600]};
          box-shadow: ${({ theme }) => theme.shadows.md};
        }
      `;
    case 'destructive':
      return css`
        background-color: ${({ theme }) => theme.colors.error};
        color: white;
        box-shadow: ${({ theme }) => theme.shadows.sm};
        
        &:hover:not(:disabled) {
          background-color: #dc2626;
        }
      `;
    case 'outline':
      return css`
        border: 1px solid ${({ theme }) => theme.colors.gray[300]};
        background-color: transparent;
        
        &:hover:not(:disabled) {
          background-color: ${({ theme }) => theme.colors.gray[50]};
          border-color: ${({ theme }) => theme.colors.text.light};
        }

        &:hover{
           color: ${({ theme }) => theme.colors.primary[500]};

        }
      `;
    case 'secondary':
      return css`
        background-color: ${({ theme }) => theme.colors.secondary[500]};
        color: white;
        box-shadow: ${({ theme }) => theme.shadows.sm};
        
        &:hover:not(:disabled) {
          background-color: ${({ theme }) => theme.colors.secondary[600]};
        }
      `;
    case 'tertiary':
      return css`
        background-color: ${({ theme }) => theme.colors.tertiary[500]};
        color: white;
        box-shadow: ${({ theme }) => theme.shadows.sm};
        
        &:hover:not(:disabled) {
          background-color: ${({ theme }) => theme.colors.tertiary[600]};
        }
      `;
    case 'ghost':
      return css`
        background-color: transparent;
        color: ${({ theme }) => theme.colors.gray[900]};
        
        &:hover:not(:disabled) {
          background-color: ${({ theme }) => theme.colors.gray[100]};
        }
      `;
    case 'link':
      return css`
        background-color: transparent;
        color: ${({ theme }) => theme.colors.primary[500]};
        text-decoration: underline;
        text-underline-offset: 4px;
        
        &:hover:not(:disabled) {
          text-decoration: underline;
        }
      `;
    default:
      return css``;
  }
};

const getSizeStyles = (size: ButtonSize) => {
  switch (size) {
    case 'default':
      return css`
        height: 2.5rem;
        padding: 0.5rem 1rem;
      `;
    case 'sm':
      return css`
        height: 2.25rem;
        padding: 0.5rem 0.75rem;
        border-radius: ${({ theme }) => theme.borderRadius.md};
      `;
    case 'lg':
      return css`
        height: 2.75rem;
        padding: 0.5rem 2rem;
        border-radius: ${({ theme }) => theme.borderRadius.md};
      `;
    case 'icon':
      return css`
        height: 2.5rem;
        width: 2.5rem;
        padding: 0;
      `;
    default:
      return css``;
  }
};

const StyledButton = styled.button<StyledButtonProps>`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  white-space: nowrap;
  border-radius: ${({ theme }) => theme.borderRadius.md};
  font-size: ${({ theme }) => theme.typography.fontSize.sm};
  font-weight: ${({ theme }) => theme.typography.fontWeight.medium};
  transition: all ${({ theme }) => theme.transitions.fast};
  border: none;
  cursor: pointer;
  
  &:focus-visible {
    outline: 2px solid ${({ theme }) => theme.colors.primary[500]};
    outline-offset: 2px;
  }
  
  &:disabled {
    pointer-events: none;
    opacity: 0.5;
    cursor: not-allowed;
  }
  
  svg {
    pointer-events: none;
    width: 1rem;
    height: 1rem;
    flex-shrink: 0;
  }
  
  ${({ $variant }) => getVariantStyles($variant)}
  ${({ $size }) => getSizeStyles($size)}
`;

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant = 'default', size = 'default', asChild = false, ...props }, ref) => {
    if (asChild) {
      return (
        <Slot ref={ref} {...props}>
          <StyledButton as="span" $variant={variant} $size={size} />
        </Slot>
      );
    }
    
    return (
      <StyledButton
        ref={ref}
        $variant={variant}
        $size={size}
        {...props}
      />
    );
  }
);

Button.displayName = "Button";

// Export buttonVariants for backward compatibility
export const buttonVariants = ({ variant = 'default', size = 'default', className = '' }: {
  variant?: ButtonVariant;
  size?: ButtonSize;
  className?: string;
} = {}) => {
  // Return a class name string for compatibility
  return `button-${variant} button-${size} ${className}`.trim();
};

export { Button };
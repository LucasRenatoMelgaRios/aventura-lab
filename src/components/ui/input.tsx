import * as React from "react"
import styled from "styled-components"

const StyledInput = styled.input`
  display: flex;
  height: 2.5rem;
  width: 100%;
  border-radius: ${({ theme }) => theme.borderRadius.md};
  border: 1px solid ${({ theme }) => theme.colors.gray[300]};
  background-color: ${({ theme }) => theme.colors.background};
  padding: 0.5rem 0.75rem;
  font-size: ${({ theme }) => theme.typography.fontSize.base};
  color: ${({ theme }) => theme.colors.gray[900]};
  transition: all ${({ theme }) => theme.transitions.fast};
  
  &::placeholder {
    color: ${({ theme }) => theme.colors.gray[500]};
  }
  
  &:focus-visible {
    outline: none;
    border-color: ${({ theme }) => theme.colors.primary[500]};
    box-shadow: 0 0 0 2px ${({ theme }) => theme.colors.primary[500]}20;
  }
  
  &:disabled {
    cursor: not-allowed;
    opacity: 0.5;
  }
  
  &[type="file"] {
    border: 0;
    background: transparent;
    font-size: ${({ theme }) => theme.typography.fontSize.sm};
    font-weight: ${({ theme }) => theme.typography.fontWeight.medium};
    color: ${({ theme }) => theme.colors.gray[900]};
  }
  
  @media (min-width: ${({ theme }) => theme.breakpoints.md}) {
    font-size: ${({ theme }) => theme.typography.fontSize.sm};
  }
`;

const Input = React.forwardRef<HTMLInputElement, React.ComponentProps<"input">>(
  ({ type, ...props }, ref) => {
    return (
      <StyledInput
        type={type}
        ref={ref}
        {...props}
      />
    )
  }
)
Input.displayName = "Input"

export { Input }
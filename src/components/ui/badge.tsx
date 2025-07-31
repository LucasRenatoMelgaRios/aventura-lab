import * as React from "react"
import styled from "styled-components"
import { cva, type VariantProps } from "class-variance-authority"

const StyledBadge = styled.div<{ $variant?: string }>`
  display: inline-flex;
  align-items: center;
  border-radius: ${({ theme }) => theme.borderRadius.full};
  padding: 0.125rem 0.625rem;
  font-size: ${({ theme }) => theme.typography.fontSize.xs};
  font-weight: ${({ theme }) => theme.typography.fontWeight.semibold};
  transition: ${({ theme }) => theme.transitions.fast};
  border: 1px solid transparent;
  margin-top: 5px;
  
  ${({ $variant, theme }) => {
    switch ($variant) {
      case 'secondary':
        return `
          background-color: ${theme.colors.secondary[100]};
          color: ${theme.colors.secondary[800]};
          border-color: ${theme.colors.secondary[200]};
          &:hover {
            background-color: ${theme.colors.secondary[200]};
          }
        `;
      case 'tertiary':
        return `
          background-color: ${theme.colors.tertiary[100]};
          color: ${theme.colors.tertiary[800]};
          border-color: ${theme.colors.tertiary[200]};
          &:hover {
            background-color: ${theme.colors.tertiary[200]};
          }
        `;
      case 'outline':
        return `
          background-color: transparent;
          color: ${theme.colors.text.primary};
          border-color: ${theme.colors.gray[300]};
          &:hover {
            background-color: ${theme.colors.gray[50]};
          }
        `;
      case 'destructive':
        return `
          background-color: ${theme.colors.error};
          color: white;
          &:hover {
            background-color: #b91c1c;
          }
        `;
      default:
        return `
          background-color: ${theme.colors.primary[100]};
          color: ${theme.colors.primary[800]};
          border-color: ${theme.colors.primary[200]};
          &:hover {
            background-color: ${theme.colors.primary[200]};
          }
        `;
    }
  }}
`;

const badgeVariants = cva("", {
  variants: {
    variant: {
      default: "",
      secondary: "",
      tertiary: "",
      outline: "",
      destructive: "",
    },
  },
  defaultVariants: {
    variant: "default",
  },
})

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return (
    <StyledBadge 
      $variant={variant || "default"} 
      className={className} 
      {...props} 
    />
  )
}

export { Badge, badgeVariants }
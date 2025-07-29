import * as React from "react"
import styled from "styled-components"

const StyledCard = styled.div`
  border-radius: ${({ theme }) => theme.borderRadius.lg};
  border: 1px solid ${({ theme }) => theme.colors.gray[200]};
  background-color: ${({ theme }) => theme.colors.background};
  color: ${({ theme }) => theme.colors.gray[900]};
  box-shadow: ${({ theme }) => theme.shadows.sm};
`;

const StyledCardHeader = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.375rem;
  padding: 1.5rem;
`;

const StyledCardTitle = styled.h3`
  font-size: ${({ theme }) => theme.typography.fontSize['2xl']};
  font-weight: ${({ theme }) => theme.typography.fontWeight.semibold};
  line-height: 1;
  letter-spacing: -0.025em;
`;

const StyledCardDescription = styled.p`
  font-size: ${({ theme }) => theme.typography.fontSize.sm};
  color: ${({ theme }) => theme.colors.gray[600]};
`;

const StyledCardContent = styled.div`
  padding: 1.5rem;
  padding-top: 0;
`;

const StyledCardFooter = styled.div`
  display: flex;
  align-items: center;
  padding: 1.5rem;
  padding-top: 0;
`;

const Card = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ ...props }, ref) => (
  <StyledCard ref={ref} {...props} />
))
Card.displayName = "Card"

const CardHeader = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ ...props }, ref) => (
  <StyledCardHeader ref={ref} {...props} />
))
CardHeader.displayName = "CardHeader"

const CardTitle = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLHeadingElement>
>(({ ...props }, ref) => (
  <StyledCardTitle ref={ref} {...props} />
))
CardTitle.displayName = "CardTitle"

const CardDescription = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ ...props }, ref) => (
  <StyledCardDescription ref={ref} {...props} />
))
CardDescription.displayName = "CardDescription"

const CardContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ ...props }, ref) => (
  <StyledCardContent ref={ref} {...props} />
))
CardContent.displayName = "CardContent"

const CardFooter = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ ...props }, ref) => (
  <StyledCardFooter ref={ref} {...props} />
))
CardFooter.displayName = "CardFooter"

export { Card, CardHeader, CardFooter, CardTitle, CardDescription, CardContent }
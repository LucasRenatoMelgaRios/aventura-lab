import * as React from "react"
import * as LabelPrimitive from "@radix-ui/react-label"
import styled from "styled-components"

const StyledLabel = styled(LabelPrimitive.Root)`
  font-size: ${({ theme }) => theme.typography.fontSize.sm};
  font-weight: ${({ theme }) => theme.typography.fontWeight.medium};
  line-height: 1;
  color: ${({ theme }) => theme.colors.text.primary};
  
  &[data-disabled] {
    cursor: not-allowed;
    opacity: 0.7;
  }
  
  &:disabled {
    cursor: not-allowed;
    opacity: 0.7;
  }
`

interface LabelProps extends React.ComponentPropsWithoutRef<typeof LabelPrimitive.Root> {}

const Label = React.forwardRef<
  React.ElementRef<typeof LabelPrimitive.Root>,
  LabelProps
>(({ ...props }, ref) => (
  <StyledLabel
    ref={ref}
    {...props}
  />
))
Label.displayName = LabelPrimitive.Root.displayName

export { Label }

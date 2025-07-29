import * as React from "react"
import * as SeparatorPrimitive from "@radix-ui/react-separator"
import styled from "styled-components"

const StyledSeparator = styled(SeparatorPrimitive.Root)<{ 
  orientation?: "horizontal" | "vertical" 
}>`
  flex-shrink: 0;
  background-color: ${({ theme }) => theme.colors.gray[200]};
  
  ${({ orientation }) => 
    orientation === "horizontal" 
      ? `height: 1px; width: 100%;` 
      : `height: 100%; width: 1px;`
  }
`;

const Separator = React.forwardRef<
  React.ElementRef<typeof SeparatorPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof SeparatorPrimitive.Root>
>(
  (
    { className, orientation = "horizontal", decorative = true, ...props },
    ref
  ) => (
    <StyledSeparator
      ref={ref}
      decorative={decorative}
      orientation={orientation}
      className={className}
      {...props}
    />
  )
)
Separator.displayName = SeparatorPrimitive.Root.displayName

export { Separator }
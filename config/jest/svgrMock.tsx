import React, { SVGProps } from 'react'

const SvgrMock = React.forwardRef<SVGSVGElement, SVGProps<SVGSVGElement>>(
    // eslint-disable-next-line
    (props, ref) => <svg ref={ref} {...props} />
)

SvgrMock.displayName = 'SvgrMock'

export const ReactComponent = SvgrMock
export default SvgrMock

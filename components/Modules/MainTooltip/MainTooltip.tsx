import { Tooltip } from '@nextui-org/react'
import React, { ReactNode } from 'react'

export default function MainTooltip({ children, content }: { children: ReactNode, content: string }) {
    return (
        <Tooltip
            content={<p className='font-peyda text-sm'>{content}</p>}
            className='rounded-md !p-2'
            showArrow
        >
            {children}
        </Tooltip>
    )
}

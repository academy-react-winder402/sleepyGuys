import { mainSelectProps } from '@/interfaces/mainSelect.interface'
import { Select, SelectItem } from '@nextui-org/react'
import { useRouter } from 'next/router';
import React, { useState } from 'react'

export default function MainSelect({ label, variant, placeholder, queryName, data, className }: mainSelectProps) {
    const router = useRouter()
    const { pathname, query } = router

    const [value, setValue] = useState("");

    const handleSelectionChange = (e: any) => {
        setValue(e.target.value);
        router.push({
            pathname,
            query: {
                ...query,
                [queryName]: e.target.value,
                PageNumber: 1
            }
        })
    };
    return (
        <Select
            label={label}
            variant={variant}
            placeholder={placeholder}
            selectedKeys={[value]}
            classNames={{
                label: ["font-peyda"],
                popoverContent: ["font-peyda !bg-mainBodyBg dark:!bg-dark"],
                value: ["font-peyda"],
                trigger: ["!bg-mainBodyBg dark:!bg-dark"]
            }}
            onChange={handleSelectionChange}
            className={className}
        >
            {data.map((animal) => (
                <SelectItem key={animal.query}>
                    {animal.name}
                </SelectItem>
            ))}
        </Select>
    )
}

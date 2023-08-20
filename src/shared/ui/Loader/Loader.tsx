import { classNames } from 'shared'
import cls from './Loader.module.scss'

interface LoaderProps {
    className?: string
}

export const Loader = ({ className }: LoaderProps) => {
    return (
        <div className={classNames(cls.lds_spinner)}>
            <div />
            <div />
            <div />
            <div />
            <div />
            <div />
            <div />
            <div />
            <div />
            <div />
            <div />
            <div />
        </div>
    )
}

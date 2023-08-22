import { classNames } from 'shared'
import cls from './Loader.module.scss'

export const Loader = () => {
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

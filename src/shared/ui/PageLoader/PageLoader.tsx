import { classNames } from 'shared'
import cls from './PageLoader.module.scss'
import { Loader } from '../Loader/Loader'

interface PageLoaderProps {
    className?: string
}

export const PageLoader = ({ className }: PageLoaderProps) => {
    return (
        <div className={classNames(cls.page_loader)}>
            <Loader />
        </div>
    )
}

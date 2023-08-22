import { classNames } from 'shared'
import cls from './PageLoader.module.scss'
import { Loader } from '../Loader/Loader'

export const PageLoader = () => {
    return (
        <div className={classNames(cls.page_loader)}>
            <Loader />
        </div>
    )
}

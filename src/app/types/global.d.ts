declare module '*.scss' {
    interface IClassNames {
        [className: string]: string
    }
    const classNames: IClassNames
    export = classNames
}

declare module '*.svg' {
// eslint-disable-next-line
    const content: React.FunctionComponent<React.SVGAttributes<SVGElement>>
    export default content
}

declare module '*.gif'
declare module '*.png'
declare module '*.jpeg'

// eslint-disable-next-line
declare const __IS_DEV__: boolean

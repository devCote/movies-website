export type BuildMode = 'production' | 'development'

export interface BuildPaths {
    entry: string
    build: string
    html: string
    favicon: string
    src: string
}
export interface BuildEnv {
    mode: BuildMode
    port: number
}

export interface BuildOprions {
    mode: BuildMode
    paths: BuildPaths
    isDev: boolean
    port: number
}

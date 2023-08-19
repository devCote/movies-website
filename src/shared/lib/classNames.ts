type Mods = Record<string, boolean | string>

export function classNames(
    cls: string,
    mods: Mods = {},
    additional: string[] = []
): string {
    return [
        cls,
        ...additional.filter(Boolean),
        ...Object.entries(mods)
            // eslint-disable-next-line
            .filter(([_className, value]) => Boolean(value))
            .map(([className]) => className),
    ].join(' ')
}

type Mods = Record<string, boolean>;

export function classNames(cls: string, mods: Mods = {}, additional: (string|undefined)[] = []): string {
    return [
        cls,
        ...Object.keys(mods).filter(key => mods?.[key]),
        ...additional.filter(Boolean),
    ].join(' ');
}
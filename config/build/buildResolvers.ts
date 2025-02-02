import { ResolveOptions } from 'webpack';
import { BuildOptions } from './types/config';

export function buildResolvers({paths}: BuildOptions): ResolveOptions {

    return {
        extensions: ['.tsx', '.ts', '.js'],
        preferAbsolute: true,
        modules: [paths.srcAlias, 'node_modules'],
        alias: {
            '@': paths.srcAlias,
        },
        mainFiles: ['index'],
    }
}
interface MergedConfig {
    inlineCSS?: boolean;
    removeUnusedCSS?: boolean;
    shorthandCSS?: boolean;
    applyTransformers?: boolean;
    build?: Object;
    css: string;
    [key: string]: any;
}

interface RenderOptions {
    maizzle: Object;
    tailwind?: {
        config?: Object;
        css?: string;
        compiled?: string;
    };
    beforeRender?: (html: string, config: MergedConfig) => string;
    afterRender?: (html: string, config: MergedConfig) => string;
    afterTransformers?: (html: string, config: MergedConfig) => string;
}

type RenderOutput = {
    html: string;
    config: MergedConfig;
};

declare const _exports: {
    render: (html: string, options?: RenderOptions) => Promise<RenderOutput>;
}

export = _exports;
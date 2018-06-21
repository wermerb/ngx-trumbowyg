export interface ButtonConfig {
    fn?: string | Function;
    tag?: string;
    title?: string;
    text?: string;
    isSupported?: () => boolean;
    key?: string;
    param?: string;
    forceCSS?: string | boolean;
    class?: string;
    hasIcon?: boolean;
    ico?: string;
}

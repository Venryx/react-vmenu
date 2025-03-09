import React from "react";
export type n = null | undefined;
export type FixHTMLProps<T> = Omit<T, "title"> & {
    title?: string | n;
};
export type HTMLProps_Fixed<T extends keyof React.JSX.IntrinsicElements> = FixHTMLProps<React.JSX.IntrinsicElements[T]>;
export type RequiredBy<T, K extends keyof T> = Omit<T, K> & Required<Pick<T, K>>;

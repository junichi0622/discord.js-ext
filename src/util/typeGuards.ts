import { Nullable, Optional, Maybe } from './types';

export function isNotNull<T>(value: Nullable<T>): value is T {
    return value !== null;
}

export function isDefined<T>(value: Optional<T>): value is T {
    return value !== undefined;
}

export function isPresent<T>(value: Maybe<T>): value is T {
    return value !== null && value !== undefined;
}
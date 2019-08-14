import { Observable, Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

type Stream<T> = (source: Observable<T>) => Observable<T>;

export function untilComponentDestroyed<T, U>(component: U): Stream<T> {
    return (source: Observable<T>) => source.pipe(takeUntil(componentDestroyed(component)));
}

function componentDestroyed(component: {  ngOnDestroy?(): void }): Observable<boolean> {
    const destroy$: Subject<boolean> = new Subject();
    const ngOnDestroy = component.ngOnDestroy;

    component.ngOnDestroy = () => {
        ngOnDestroy && ngOnDestroy.call(component);
        destroy$.next(true);
        destroy$.complete();
    };

    return destroy$.asObservable();
}

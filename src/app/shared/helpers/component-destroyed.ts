import { OnDestroy } from '@angular/core';
import { Subject } from 'rxjs';

export abstract class ComponentDestroyed implements OnDestroy {
    public destroy$: Subject<void> = new Subject();

    public ngOnDestroy(): void {
        this.destroy$.next();
        this.destroy$.complete();
    }
}

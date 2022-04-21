import {
  CallHandler,
  ExecutionContext,
  Injectable,
  NestInterceptor,
} from '@nestjs/common';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Exception } from '../../exceptions';

@Injectable()
export class ValidationInterceptor implements NestInterceptor {
  intercept(
    context: ExecutionContext,
    next: CallHandler<any>,
  ): Observable<any> | Promise<Observable<any>> {
    return next.handle().pipe(
      catchError((error) => {
        let validationResult;

        if (error instanceof Exception) {
          validationResult = {
            code: error.code,
            message: error.message,
          };
        }

        return of(validationResult);
      }),
    );
  }
}

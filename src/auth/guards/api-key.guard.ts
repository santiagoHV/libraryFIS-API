import { CanActivate, ExecutionContext, Injectable, UnauthorizedException } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { Request } from 'express';
import { Observable } from 'rxjs';
import { IS_PUBLIC_KEY } from '../decorators/public.decorator';

@Injectable()
export class ApiKeyGuard implements CanActivate {

  constructor(private reflector: Reflector){}

  canActivate(
    context: ExecutionContext,
  ): boolean | Promise<boolean> | Observable<boolean> {

    const isPublic = this.reflector.get<boolean>(IS_PUBLIC_KEY, context.getHandler())

    if (isPublic) {
      return true
    }

    const request = context.switchToHttp().getRequest<Request>()
    const authHeader = request.header('Auth')
    const isAuth = authHeader === 'secret'
    if(!isAuth){
      throw new UnauthorizedException('no alowado')
    }
    return isAuth
  }
}

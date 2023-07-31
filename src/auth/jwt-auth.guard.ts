import { CanActivate, ExecutionContext,Injectable, UnauthorizedException } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import { Observable } from "rxjs";

@Injectable()
export class JwtAuthguard implements CanActivate{
    constructor(private jwtService:JwtService){}
    canActivate(context: ExecutionContext): boolean | Promise<boolean> | Observable<boolean> {
       const req = context.switchToHttp().getRequest()
       try {
            const authHeader = req.headers.authorIzation;
            const bearer = authHeader.split( ' ')[0]
            const token = authHeader.split( ' ')[1]

            if(bearer !=="bearer"  && !token){
                throw new UnauthorizedException({message:"USER non"})
            }
            const user =this.jwtService.verify(token)
            req.user = user
            return true
       } catch (error) {
         throw new UnauthorizedException({message:"USER non"})
       }
    }
    
}
import { Controller, Get, Res, UseGuards } from '@nestjs/common';
import { Response } from 'express';
import { AuthenticatedGuard, DiscordAuthGuard } from '../../guards';

@Controller('auth')
export class AuthController {
  // GET /api/auth/login
  @Get('login')
  @UseGuards(DiscordAuthGuard)
  login() {
    return;
  }

  // GET /api/auth/redirect
  @Get('redirect')
  @UseGuards(DiscordAuthGuard)
  redirect(@Res() res: Response) {
    res.redirect('http://localhost:3001/dashboard');
  }

  // GET /api/auth/status
  @Get('status')
  @UseGuards(AuthenticatedGuard)
  status() {
    return 'okAY';
  }

  // GET /api/auth/logout
  @Get('logout')
  logout() {}
}

import { Controller, Post, Body } from '@nestjs/common';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('send-otp')
  async sendOtp(
    @Body('email') email: string,
    @Body('otp') otp: string,
  ) {
    await this.authService.sendOtp(email, otp);
    return { message: 'OTP sent successfully' };
  }

  @Post('send-reset-password')
  async sendResetPassword(
    @Body('email') email: string,
    @Body('resetLink') resetLink: string,
  ) {
    await this.authService.sendResetPassword(email, resetLink);
    return { message: 'Reset password email sent successfully' };
  }
}

import { Injectable } from '@nestjs/common';
import { EmailService } from '../email/email.service';

@Injectable()
export class AuthService {
  constructor(private readonly emailService: EmailService) {}

  async sendOtp(email: string, otp: string) {
    await this.emailService.sendOtp(email, otp);
  }

  async sendResetPassword(email: string, resetLink: string) {
    await this.emailService.sendResetPassword(email, resetLink);
  }
}

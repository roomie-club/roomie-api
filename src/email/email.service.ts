import { Injectable } from '@nestjs/common';
import * as nodemailer from 'nodemailer';

@Injectable()
export class EmailService {
  private transporter;

  constructor() {
    this.transporter = nodemailer.createTransport({
      host: 'smtp.gmail.com',
      port: 465,
      secure: true,
      auth: {
        user: 'pxpqpe@gmail.com',
        pass: 'jfit pdls djwo bxbq',
      },
    });
  }

  async sendOtp(to: string, otp: string) {
    const mailOptions = {
      from: 'Roomie <pxpqpe@gmail.com>',
      to: to,
      subject: 'Your OTP code',
      text: `your OTP code is ${otp}`,
      html: `<p>your OTP code is ${otp}</p>`,
    };
    await this.transporter.sendMail(mailOptions);
  }

  async sendResetPassword(to: string, token: string) {
    const mailOptions = {
      from: 'Roomie <pxpqpe@gmail.com>',
      to: to,
      subject: 'Reset your password',
      text: `click on the link below to reset your password http://localhost:3000/reset-password/${token}`,
      html: `<p>click on the link below to reset your password http://localhost:3000/reset-password/${token}</p>`,
    };
    await this.transporter.sendMail(mailOptions);
  }
}

/// <reference types="google-apps-script" />
import { TSessionStats } from '..';
export declare function getNewReleaseEmail(sendToEmail: string, lastReleaseObj: any): GoogleAppsScript.Mail.MailAdvancedParameters;
export declare function getSessionEmail(sendToEmail: string, sessionStats: TSessionStats): GoogleAppsScript.Mail.MailAdvancedParameters;
export declare function getDailySummaryEmail(sendToEmail: string, todaySession: TSessionStats, todayDate: string): GoogleAppsScript.Mail.MailAdvancedParameters;
export declare function getErrorEmail(sendToEmail: string, errorMessage: string): GoogleAppsScript.Mail.MailAdvancedParameters;
export declare function generateReportEmailContent(session: TSessionStats): string;
import { IPermission } from "@/types/types";
import { PLAN } from '@/shared/config';

export const getFormattedDate = (dateString: string) => {
  const date = new Date(dateString);
  const now = new Date();

  const diffInMilliseconds = now.getTime() - date.getTime();
  const diffInHours = diffInMilliseconds / (1000 * 60 * 60);

  if (diffInHours > 24) {
    const options: Intl.DateTimeFormatOptions = { day: 'numeric', month: 'long' };
    return date.toLocaleDateString('uk-UA', options);
  } else {
    const options: Intl.DateTimeFormatOptions = { hour: '2-digit', minute: '2-digit' };
    return date.toLocaleTimeString('uk-UA', options);
  }
}

export const checkingPermission = (userPermissions: IPermission[], permission: string) => {
  return userPermissions.some((userPermission: IPermission) => userPermission.name === permission && userPermission.value === true)
};


export const isPremiumUserPlan = (userPlan: string) => {
  return userPlan === PLAN.PREMIUM || userPlan === PLAN.ULTIMATE
}

interface AppConfigInterface {
  ownerRoles: string[];
  customerRoles: string[];
  tenantRoles: string[];
  tenantName: string;
  applicationName: string;
  addOns: string[];
}
export const appConfig: AppConfigInterface = {
  ownerRoles: ['Administrator'],
  customerRoles: [],
  tenantRoles: ['Administrator', 'Content Manager'],
  tenantName: 'Organization',
  applicationName: 'ArcheoReality',
  addOns: ['file upload', 'chat', 'notifications', 'file'],
};

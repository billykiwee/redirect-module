import * as device from 'device';

export function GetDevice(userAgentHeader: string): string {
  const deviceInfo = device(userAgentHeader);
  return deviceInfo.type;
}

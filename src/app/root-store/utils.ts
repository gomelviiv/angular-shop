export const createConstant = <T>(
  constants: readonly any[],
  constantType: string
): T =>
  constants.reduce((acc, constant: string) => {
    const prefix = constantType ? `${constantType}/` : '';
    acc[constant] = `${prefix}${constant}`;
    return acc;
  }, {});

export const randomId = (): string =>
  '_' + Math.random().toString(36).substr(2, 9);

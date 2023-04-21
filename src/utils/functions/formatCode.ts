import prettier from 'prettier';

export function formatCode(data: string) {
  const formattedJsData = prettier.format(data, {
    parser: 'babel',
    semi: true,
    trailingComma: 'es5',
    singleQuote: false,
    tabWidth: 2,
  });

  return formattedJsData;
}

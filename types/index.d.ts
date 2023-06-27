declare module '@khanacademy/kas' {
  export function parse(val: string): { parsed: boolean, expr: any }
  export function compare(firstParsedExpr: any, secondParsedExpr: any, options?: { simplify?: boolean, form?: boolean }): { equal: boolean, message: string | null }
}

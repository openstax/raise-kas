declare module '@khanacademy/kas' {
  // TODO: These are placeholder definitions to be improved in k12-432
  export function parse(val: string): any
  export function compare(v1: any, v2: any, options?: { simplify: boolean, form: boolean }): any
}

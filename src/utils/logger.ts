type Opts = {
  status: string,
  message: string,
  from: string
}
export function logger (opts: Opts): void {
  const output = JSON.stringify(opts)
  process.stdout.write(output + '\n')
}

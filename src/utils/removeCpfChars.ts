export default function removeCpfChars (cpf: string) {
  return cpf.replace(/[-.]/g, '')
}

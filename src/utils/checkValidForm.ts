export default function checkValidForm (templateKey: string) {
  const validForms = [
    'c22cc324-0517-4a39-9bc0-e5565c3cdd50',
    'c95827ae-a852-4dea-b400-a495fe5b287a',
    '544660ce-e17c-4868-8c34-33e2822fb1aa',
    '72eb24b9-3bd0-4c42-b4f7-f7ce24f494fa',
    'd0a6679e-3f96-40f9-864c-b16ac88d2f1a',
    'bf20e8d7-7078-4e79-948e-ef5e8dd2a6b5',
    '2d92d932-02ba-48d0-b70f-5673b6e77536',
    '97ca6085-b59b-4321-83c3-5fd59755ebef',
    '1799d17e-e40f-43f8-a69a-ca91af34a399',
    '87b8df81-8735-4bb3-b483-a388c8accc47'
  ]
  return validForms.includes(templateKey)
}

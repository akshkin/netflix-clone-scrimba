
import {Container, Input, Button, Text } from "./opt-form.style"

function OptForm({children, ...restProps}){
  return (
    <Container {...restProps}>
      {children}
    </Container>
  )
}

OptForm.Input = function OptFormInput({children, ...restProps}){
  return <Input {...restProps}/>
}
OptForm.Button = function OptFormButton({children, ...restProps}){
  return (
    <Button {...restProps}>
      {children} <img src="/images/icons/chevron-right.png" alt="Try now"/>
    </Button>
  )
}
OptForm.Text = function OptFormText({children, ...restProps}){
  return <Text {...restProps}>{children}</Text>
}

export default OptForm
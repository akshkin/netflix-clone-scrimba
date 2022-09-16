import { Spinner, LockBody, ReleaseBody} from "./loading.style"

function Loading({src, ...restProps}){
  return (
    <Spinner {...restProps}>
      <LockBody />
    </Spinner>
  )
}

Loading.ReleaseBody = function LoadingReleaseBody(){
  return <ReleaseBody />
}

export default Loading
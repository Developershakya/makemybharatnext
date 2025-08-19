// utils/withDeviceDetect.tsx
import { NextPage, GetServerSideProps } from 'next'
import { isMobileDevice } from '@/lib/deviceDetect'

export type DeviceProps = {
  isMobile: boolean
}

export function withDeviceDetect(
  WrappedComponent: NextPage<any>,
  getServerSidePropsFn?: GetServerSideProps
) {
  const EnhancedComponent: NextPage<any> = (props) => {
    return <WrappedComponent {...props} />
  }

  EnhancedComponent.getServerSideProps = async (context) => {
    const isMobile = isMobileDevice(context.req)
    
    let additionalProps = {}
    if (getServerSidePropsFn) {
      additionalProps = await getServerSidePropsFn(context)
    }

    return {
      ...additionalProps,
      props: {
        ...(additionalProps as any).props,
        isMobile
      }
    }
  }

  return EnhancedComponent
}
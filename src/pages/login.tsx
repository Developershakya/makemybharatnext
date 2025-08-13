import Header from '@/components/Header';
import { LoginForm } from '../components/login-form';
import Footer from '@/components/Footer';


export default function LoginPage() {
  return (
    <>
        <Header />
    {/* <div className="max-h-screen bg-gradient-to-br from-orange-50 via-white to-red-50 flex flex-col items-center justify-center "> */}
      {/* <div className="w-full  max-w-screen"> */}
        <LoginForm />
        
      {/* </div>
    </div> */}
        <Footer />

    </>
  )
}

import { Icon } from '@iconify/react'
import userimg from '../../../assets/user_m_mini.png'
import { useAuthContext } from '../../../context/Auth/useAuthContext';

const TopProfile = () => {
  const {myInformation} = useAuthContext();
  
  const { user_name } = myInformation;

  return (
    <header className="bg-white w-full py-4 px-4 md:px-8 flex items-center justify-between flex-wrap gap-4 shadow z-10">
      {/* Saludo: oculto en móvil */}
      <div className="hidden md:block text-lg md:text-2xl text-gray-600 font-semibold flex-1 min-w-[200px]">
        Hola <span className="font-bold">{user_name}</span>, bienvenido
      </div>

      {/* Iconos y avatar */}
      <div className="flex items-center gap-4 ml-auto">
        <button className="text-2xl md:text-3xl text-gray-600 hover:text-blue-600 transition-colors">
          <Icon icon="tabler:message" />
        </button>
        <button className="text-2xl md:text-3xl text-gray-600 hover:text-blue-600 transition-colors">
          <Icon icon="mi:notification" />
        </button>
        <div className="relative">
          <img
            src={userimg}
            alt="User"
            className="rounded-full w-10 h-10 object-cover border border-gray-300"
          />
        </div>
      </div>
    </header>
  )
}

export default TopProfile

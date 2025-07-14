import { JSX, useState } from 'react'
import {
  FaUserCircle,
  FaCheckCircle,
  FaTimesCircle,
  FaMoneyBillWave,
  FaUsers,
  FaHistory
} from 'react-icons/fa'
import { userData, User } from '@renderer/data/Userdata'
import { useFilterData } from '@renderer/hooks/useFilterData'
import Searchbar from '@renderer/components/searchbar/Searchbar'
import ModuleHistoryRetrait from '@renderer/components/modulehistoryRetrait/Modulehistoryretrait'

function Historique(): JSX.Element {
  const [selectedUser, setSelectedUser] = useState<User | null>(null)
  const usernanaoretraits = userData.filter((user) => user.retrait)
  const [user] = useState(usernanaoretraits)
  const [searchuser, setsearchuser] = useState('')
   
  const handlesearchuser = (datauser: string) => {
      setsearchuser(datauser)
    }
  
  const filtereusers = useFilterData(user, searchuser, ['nom', 'prenom'])
   
    
 


  return (
    <div className="Rigth bg-[#E6E6FA] w-full min-h-screen pl-6 pt-4 pr-4 transition-all duration-600 overflow-hidden">
      <div className="p-6 space-y-6">
        <Searchbar onSearch={handlesearchuser} />

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <div className="flex items-center gap-4 bg-white rounded-xl p-4 shadow">
            <div className="bg-[#2F855A] text-white p-3 rounded-full">
              <FaMoneyBillWave size={24} />
            </div>
            <div>
              <h3 className="text-sm text-gray-500">Total Retraits Acceptés</h3>
              <p className="text-lg font-bold text-[#2F855A]">128 Ar</p>
            </div>
          </div>

          <div className="flex items-center gap-4 bg-white rounded-xl p-4 shadow">
            <div className="bg-[#2F855A] text-white p-3 rounded-full">
              <FaHistory size={24} />
            </div>
            <div>
              <h3 className="text-sm text-gray-500">Nombre de Retraits</h3>
              <p className="text-lg font-bold text-[#2F855A]">25</p>
            </div>
          </div>

          <div className="flex items-center gap-4 bg-white rounded-xl p-4 shadow">
            <div className="bg-[#2F855A] text-white p-3 rounded-full">
              <FaUsers size={24} />
            </div>
            <div>
              <h3 className="text-sm text-gray-500">Utilisateurs Actifs</h3>
              <p className="text-lg font-bold text-[#2F855A]">{userData.length}</p>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-xl shadow-md p-4 overflow-y-auto max-h-[60vh]">
          <h2 className="text-lg font-semibold text-[#2F855A] mb-4">Historique des retraits</h2>

          <ul className="divide-y divide-gray-200 text-sm">
               {filtereusers.length === 0 ? (
              <div className="text-center py-6 text-gray-500 text-sm">Aucun utilisateur trouvé</div>
            ) : (
            filtereusers.map((user, index) => (
              <li
                key={index}
                className="py-3 flex items-center justify-between hover:bg-gray-50 px-2 rounded-md transition"
              >
                <div
                  className="flex items-center gap-3 cursor-pointer"
                  onClick={() => setSelectedUser(user)}
                >
                  <FaUserCircle className="text-[#2F855A]" size={22} />
                  <div>
                    <p className="font-semibold">
                      {user.nom} {user.prenom}
                    </p>
                    <p className="text-xs text-gray-500">{user.retrait?.date}</p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <span
                    className={`font-bold ${
                      user.retrait?.statut === 'accepté' ? 'text-[#2F855A]' : 'text-red-500'
                    }`}
                  >
                    {user.retrait?.montant} Ar
                  </span>

                  {user.retrait?.statut === 'accepté' ? (
                    <FaCheckCircle className="text-[#2F855A]" size={18} />
                  ) : (
                    <FaTimesCircle className="text-red-500" size={18} />
                  )}
                </div>
              </li>
            )))}
          </ul>
        </div>
      </div>

{selectedUser && <ModuleHistoryRetrait user={selectedUser} onClose={() => setSelectedUser(null)} />}
    </div>
  )
}

export default Historique

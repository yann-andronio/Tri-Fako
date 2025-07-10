import { useSelector } from 'react-redux'
import { RootState } from '../../redux/Store'
import { JSX, useState } from 'react'
import {  FiMapPin,  } from 'react-icons/fi'
import { FaUserFriends, FaEye, FaUserCircle } from 'react-icons/fa'
import {  GiFruitBowl , GiCardboardBox  } from 'react-icons/gi'
import { FaRecycle } from 'react-icons/fa'
import { useFilterData } from '@renderer/hooks/useFilterData'
// import Searchbar from '@renderer/components/searchbar/Searchbar'
import { userData } from '@renderer/data/Userdata'

type CardData = {
  title: string
  value: string
  icon: JSX.Element
  gradient: string
}





const cardsData: CardData[] = [
  {  title: 'Utilisateurs connectés', value: '24', icon: <FaUserFriends size={26} />, gradient: 'from-[#2F855A] to-[#38A169]'},
  {  title: ' Déchets Plastiques', value: '10', icon: <FaRecycle size={26} />, gradient: 'from-[#4FD1C5] to-[#319795]'},
  { title: 'Déchets Organique ', value: '30', icon: <GiFruitBowl size={26} />, gradient: 'from-[#68D391] to-[#38A169]' },
  {  title: 'Déchets Papiers ', value: '22', icon: <GiCardboardBox size={29} />, gradient: 'from-[#9f7126] to-[#C58A2E]'},

]

function Dashboard(): JSX.Element {
  const closeBar = useSelector((state: RootState) => state.activeLink.closeBar)
  const [searcheleves] = useState('')
  //  const handleSearcheleves = (dataeleve: string) => {
  //    setSearcheleves(dataeleve)
  //  }
  const filtereEleves = useFilterData(userData, searcheleves, ['nom', 'prenom'])
  


  return (
    <div className={`Rigth bg-[#E6E6FA] w-[100%]  pl-8 pt-4 ${closeBar ? '' : ''} transition-all duration-[600ms] ease-in-out`} >
      <div className="p-9">
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6 ">
          {cardsData.map((item, index) => (
            <div
              key={index}
              className="relative bg-white p-6 min-h-[150px] rounded-2xl shadow-md transition-shadow duration-300 group overflow-hidden hover:shadow-xl"
            >
              <div
                className={`absolute right-5 top-6 w-14 h-14 rounded-full bg-gradient-to-br ${item.gradient} flex items-center justify-center text-white shadow-md transition-transform group-hover:scale-105`}
              >
                {item.icon}
              </div>
              {/* decoration boribory left */}
              <div
                className={`absolute -bottom-8 -left-12 w-48 h-48 bg-gradient-to-br ${item.gradient} opacity-10 rounded-full`}
              />
              <div className="mt-7">
                <p className="text-base text-gray-600 font-semibold tracking-wide">{item.title}</p>
                <p className="text-3xl font-bold text-[#2F855A] mt-1">{item.value}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="bg-white p-6 rounded-2xl shadow-lg">
            <div className="flex justify-between items-center mb-4">
              <h2 className="text-xl font-semibold text-[#2F855A]">Emplacement des poubelles</h2>
              <FiMapPin className="text-[#2F855A]" size={24} />
            </div>
            <div className="bg-gray-200 h-64 rounded-xl flex items-center justify-center text-gray-500">
              🗺️ Carte interactive à venir
            </div>
          </div>

          <div className="relative bg-white rounded-xl p-4 shadow-sm border border-gray-200 ">
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-semibold text-[#2F855A]">Utilisateurs connectés</h2>
            </div>

            <div className="hidden md:flex text-sm bg-[#2F855A] text-white px-4 py-2 rounded-md font-semibold">
              <div className="w-16">Photo</div>
              <div className="flex-1">Nom</div>
              <div className="flex-1">Prénom</div>
              <div className="flex-1">Déchet</div>
              <div className="w-10 text-center">Voir</div>
            </div>

            <div className="space-y-2 mt-2 max-h-64 overflow-y-auto pr-1 scrollbar-thin scrollbar-thumb-gray-300">
              {filtereEleves.length === 0 ? (
                <div className="text-center py-6 text-gray-500 text-sm">
                  Aucun utilisateur trouvé
                </div>
              ) : (
                filtereEleves.slice(0, 4).map((student, index) => (
                  <div
                    key={index}
                    className={`flex items-center px-4 py-2 rounded-lg text-sm ${
                      index % 2 === 0 ? 'bg-gray-50' : 'bg-white'
                    } hover:bg-green-50 border-l-2 border-transparent hover:border-[#2F855A] transition-all duration-300`}
                  >
                    <div className="w-16 flex items-center justify-start">
                      <div className="bg-[#2F855A] p-1.5 rounded-full">
                        <FaUserCircle className="text-2xl text-white" />
                      </div>
                    </div>

                    <div className="flex-1 font-medium text-gray-800 truncate">{student.nom}</div>
                    <div className="flex-1 text-gray-700 truncate">{student.prenom}</div>
                    <div className="flex-1 text-gray-600 truncate ">{student.dechets}</div>

                    <div className="w-10 text-center text-[#9f7126]">
                      <FaEye className="cursor-pointer hover:text-black transition mx-auto w-fit" />
                    </div>
                  </div>
                ))
              )}
            </div>
          </div>
        </div>
      </div>

      {/* <TestMap/> */}
    </div>
  )
}

export default Dashboard

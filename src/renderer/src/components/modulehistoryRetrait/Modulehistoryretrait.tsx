import {
  FaUserCircle,
  FaMoneyBillAlt,
  FaCalendarAlt,
  FaPhoneAlt,
  FaRecycle,
  FaTimes,
  FaHistory
} from 'react-icons/fa'
import { User } from '@renderer/data/Userdata'

type Props = {
  user: User
  onClose: () => void
}

function ModuleHistoryRetrait({ user, onClose }: Props) {
  return (
    <div className="fixed inset-0 bg-[#2F855A]/20 backdrop-blur-sm z-50 flex justify-center items-center px-4 py-6 overflow-auto">
          <div className="bg-white rounded-3xl shadow-lg w-full max-w-md p-6 relative animate-fadeIn overflow-hidden">
              
        <button
          onClick={onClose}
          aria-label="Fermer"
          className="absolute top-4 right-4 text-gray-500 hover:text-red-500 transition focus:outline-none focus:ring-2 focus:ring-red-400 rounded-full p-1"
        >
          <FaTimes size={20} />
        </button>

        <div className="flex items-center gap-5 mb-6">
          <FaUserCircle className="text-[#2F855A]" size={50} />
          <div>
            <h2 className="text-2xl font-extrabold text-[#2F855A] tracking-wide">
              {user.nom} {user.prenom}
            </h2>

            <p className="text-sm text-gray-600 flex items-center gap-2 mt-1">
              <FaPhoneAlt className="text-[#2F855A]" size={14} />
              {user.telephone || 'Non renseigné'}
            </p>
          </div>
        </div>

        <section className="bg-[#F0FFF4] p-5 rounded-lg border border-[#C6F6D5] space-y-4 max-h-[320px] overflow-y-auto scrollbar-thin scrollbar-thumb-[#9f7126]/60 scrollbar-track-[#F0FFF4]/40">
          <h3 className="text-lg font-bold text-[#2F855A] mb-3 flex items-center gap-3">
            <FaHistory /> Historique des retraits
          </h3>

          {user.retraits && user.retraits.length > 0 ? (
            user.retraits.map((r, idx) => (
              <article
                key={idx}
                className="bg-white rounded-lg p-4 shadow-sm border border-gray-100 flex flex-col gap-2 hover:shadow-md transition-shadow cursor-default"
              >
                <div className="flex items-center gap-3 text-sm text-gray-700">
                  <FaMoneyBillAlt className="text-[#2F855A]" />
                  <span>
                    Montant : <strong>{r.montant.toLocaleString('fr-FR')} Ar</strong>
                  </span>
                </div>
                <div className="flex items-center gap-3 text-sm text-gray-700">
                  <FaCalendarAlt className="text-[#2F855A]" />
                  <span>
                    Date : <strong>{r.date}</strong>
                  </span>
                </div>
              </article>
            ))
          ) : (
            <p className="text-center text-gray-500 text-sm italic">Aucun retrait enregistré</p>
          )}
        </section>

        <section className="mt-7 p-5 bg-[#FFF8F2] rounded-lg border border-[#FCD9B6] text-sm space-y-3">
          <div className="flex items-center gap-3 text-gray-700">
            <FaRecycle className="text-[#2F855A]" size={18} />
            <span>
              Déchets collectés : <strong>{user.dechets}</strong>
            </span>
          </div>

          <div className="flex items-center gap-3 text-gray-700">
            <FaMoneyBillAlt className="text-[#2F855A]" size={18} />
            <span>
              Solde actuel : <strong>{(user.wallet ?? 0).toLocaleString('fr-FR')} Ar</strong>
            </span>
          </div>
        </section>
      </div>
    </div>
  )
}

export default ModuleHistoryRetrait

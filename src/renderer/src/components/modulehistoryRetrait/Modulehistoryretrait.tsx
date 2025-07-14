import {
  FaUserCircle,
  FaMoneyBillAlt,
  FaCalendarAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaRecycle,
  FaTimes
} from 'react-icons/fa'
import { User } from '@renderer/data/Userdata'

type Props = {
  user: User
  onClose: () => void
}

function ModuleHistoryRetrait({ user, onClose }: Props) {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-40 z-50 flex justify-center items-center px-4">
      <div className="bg-white rounded-2xl shadow-xl w-full max-w-md p-6 relative animate-fadeIn">
        {/* Bouton fermer */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-400 hover:text-red-500 transition"
        >
          <FaTimes size={18} />
        </button>

        {/* Header utilisateur */}
        <div className="flex items-center gap-4 mb-4">
          <FaUserCircle className="text-[#2F855A]" size={40} />
          <div>
            <h2 className="text-xl font-bold text-[#2F855A]">
              {user.nom} {user.prenom}
            </h2>
            <p className="text-sm text-gray-600 flex items-center gap-2">
              <FaEnvelope className="text-[#9f7126]" size={12} />
              {user.email}
            </p>
            <p className="text-sm text-gray-600 flex items-center gap-2">
              <FaPhoneAlt className="text-[#9f7126]" size={12} />
              {user.telephone || 'Non renseigné'}
            </p>
          </div>
        </div>

        {/* Détails du retrait */}
        {user.retrait ? (
          <div className="bg-[#F0FFF4] p-4 rounded-lg border border-[#C6F6D5] space-y-3">
            <div className="flex items-center gap-2">
              <FaMoneyBillAlt className="text-[#2F855A]" />
              <span className="font-semibold text-gray-700">
                Montant : {user.retrait.montant} Ar
              </span>
            </div>

            <div className="flex items-center gap-2">
              <FaCalendarAlt className="text-[#2F855A]" />
              <span className="font-semibold text-gray-700">Date : {user.retrait.date}</span>
            </div>

            <div className="flex items-center gap-2">
              <span className="font-semibold text-gray-700">Statut :</span>
              <span
                className={`font-bold px-2 py-1 rounded ${
                  user.retrait.statut === 'accepté'
                    ? 'bg-[#2F855A]/10 text-[#2F855A]'
                    : 'bg-red-100 text-red-600'
                }`}
              >
                {user.retrait.statut}
              </span>
            </div>
          </div>
        ) : (
          <div className="text-center text-gray-500 mt-4">Aucun retrait enregistré</div>
        )}

        {/* Autres infos utilisateur */}
        <div className="mt-6 p-4 bg-[#FFF8F2] rounded-lg border border-[#FCD9B6] text-sm space-y-2">
          <div className="flex items-center gap-2 text-gray-700">
            <FaRecycle className="text-[#9f7126]" />
            <span>
              Déchets collectés : <strong>{user.dechets}</strong>
            </span>
          </div>

          <div className="flex items-center gap-2 text-gray-700">
            <FaMoneyBillAlt className="text-[#9f7126]" />
            <span>
              Solde actuel : <strong>{user.wallet} Ar</strong>
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ModuleHistoryRetrait

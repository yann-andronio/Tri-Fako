import Versions from './components/Versions'

function App(): React.JSX.Element {
  const ipcHandle = (): void => {
    window.electron.ipcRenderer.send('ping')
  }

  return (
    <>
      <div className="text-center text-sm text-gray-500 mt-4">
        Powered by <span className="font-semibold">electron-vite</span>
      </div>

      <div className="mt-8 text-center text-lg font-medium text-gray-700">
        Build an Electron app with <span className="text-blue-600 font-bold">React</span> and{' '}
        <span className="text-indigo-600 font-bold">TypeScript</span>
      </div>

      <p className="mt-6 text-red-500 font-semibold text-center">Texte rouge</p>

      <p className="mt-4 text-center text-gray-600 italic">
        Please try pressing <code className="bg-gray-200 rounded px-1">F12</code> to open the
        devTool
      </p>

      <div className="mt-8 flex justify-center gap-6">
        <div>
          <a
            href="https://electron-vite.org/"
            target="_blank"
            rel="noreferrer"
            className="text-blue-500 hover:text-blue-700 underline transition-colors"
          >
            Documentation
          </a>
        </div>
        <div>
          <button
            onClick={ipcHandle}
            className="text-green-600 hover:text-green-800 underline transition-colors cursor-pointer bg-transparent border-none p-0"
            type="button"
          >
            Send IPC
          </button>
        </div>
      </div>

      <div className="mt-10">
        <Versions />
      </div>
    </>
  )
}

export default App

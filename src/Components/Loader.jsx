import { NewtonsCradle } from '@uiball/loaders'

export const Loader = () => {
  return (
    <div className="conteiner-loader">

      <NewtonsCradle
        size={40}
        speed={1.4}
        color="black"
      />
    </div>
  )
}

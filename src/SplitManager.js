import View from './View'
import './SplitManager.scss'
import views from './data'

const SplitManager = () => {
  return (
    <section className="splitManager">
      {views.map((view) => {
        return <View key={view.id} {...view} />
      })}
    </section>
  )
}

export default SplitManager

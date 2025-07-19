import {motion} from 'framer-motion'

const SettingSection = ({icon: Icon, title, children}) => {
  return (
    <motion.div>
        <div>
            <Icon/>
            <h2></h2>
        </div>
        {children}
    </motion.div>
  )
}

export default SettingSection
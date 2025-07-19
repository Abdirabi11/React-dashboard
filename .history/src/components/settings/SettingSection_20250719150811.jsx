import {motion} from 'framer-motion'

const SettingSection = ({icon: icon, title, children}) => {
  return (
    <motion.div>
        <div>
            <Icon/>
        </div>
    </motion.div>
  )
}

export default SettingSection
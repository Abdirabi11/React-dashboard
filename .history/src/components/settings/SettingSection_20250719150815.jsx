import {motion} from 'framer-motion'

const SettingSection = ({Icon: icon, title, children}) => {
  return (
    <motion.div>
        <div>
            <Icon/>
        </div>
    </motion.div>
  )
}

export default SettingSection
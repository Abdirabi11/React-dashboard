import {motion} from 'framer-motion'

const SettingSection = ({icon: Icon, title, children}) => {
  return (
    <motion.div>
        <div className='flex items-center mb-4'>
            <Icon/>
            <h2>{title}</h2>
        </div>
        {children}
    </motion.div>
  )
}

export default SettingSection
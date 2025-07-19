import {motion} from 'framer-motion'

const SettingSection = ({icon: Icon, title, children}) => {
  return (
    <motion.div>
        <div className='flex items-center mb-4'>
            <Icon className="text-indigo-400 mr-400"/>
            <h2>{title}</h2>
        </div>
        {children}
    </motion.div>
  )
}

export default SettingSection
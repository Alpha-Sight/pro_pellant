import dashboard_icon from '@/assets/images/dashboard_arrow.svg';
import LinkWithTransition from '@/components/LinkWithTransition';


const DashboardButton: React.FC = () => {
  return (
    <LinkWithTransition href='/user_dashboard'>
    <div className='flex justify-between cursor-pointer max-w-[7.74rem] '>
        <p className='font-semibold text-[0.9rem] md:text-[1.1rem] text-[#3D3F4E] leading-[1.68rem] drop-shadow-[0.67px_0.67px_13.28px_rgba(0,0,0,0.5)]'>Dashboard</p>
        <img src={dashboard_icon} alt="dashboard arrow" className='w-[1.86rem] h-7' />
    </div>
</LinkWithTransition>
  )
}

export default DashboardButton
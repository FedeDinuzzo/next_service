import { stats } from '@/app/constants/index'
import styles from "@/app/constants/style"

const Stats = () => (
  <section className={`sm:${styles.flexCenter} flex-row flex-wrap mb-10 md:mb-20 m-6 md:-mt-48 lg:-mt-24 xl:mt-0 lg:mb-40 xl:mb-12`}>
    {/* <Counter from={0} to={100} /> */}
    {stats.map((stat) => (
      <div key={stat.id} className={`sm:flex-1 flex justify-start items-center flex-row m-3 lg:m-0`}>
        <div className='font-poppins font-semibold sm:text-[40px] xs:text-[36px] text-[30px] xs:leading-[53px] leading-[43px] text-white'>{stat.value}</div>
        <p className='font-poppins font-normal sm:text-[20px] xs:text-[18px] text-[16px] xs:leading-[26px] leading-[21px] text-gradient uppercase ml-3'>{stat.title}</p>
      </div>
    ))}
  </section>
)

export default Stats

import Image from 'next/image'
import React from 'react'

interface ServiceCardTypes {
  icon: any // môže byť string, funkcia, alebo objekt s .src
  title: string
  shortDescription: string
}

const ServiceCard: React.FC<ServiceCardTypes> = ({ title, shortDescription, icon }) => {
  return (
    <div className="bg-secondary border-border flex flex-col items-center rounded-[14px] border p-5">
      {typeof icon === 'string' ? (
        <Image src={icon} alt={title} className="my-1 size-14" width={56} height={56} />
      ) : typeof icon === 'function' ? (
        React.createElement(icon, { className: 'my-1 size-14' })
      ) : icon && icon.src ? (
        <Image src={icon.src} alt={title} className="my-1 size-14" width={56} height={56} />
      ) : null}
      <h5 className="text-accent mt-2 mb-5 text-center text-base font-semibold">{title}</h5>
      <div className="bg-primary rounded-2xl p-4">
        <p className="text-primary-content text-center text-sm font-normal">{shortDescription}</p>
      </div>
    </div>
  )
}

export default ServiceCard
